#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');
const chalk = require('chalk');
const appVersion = 'v1.0.0\n'

// Ranglar uchun helper
const log = {
  success: (text) => console.log(chalk.green('✔ ') + text),
  info: (text) => console.log(chalk.blue('') + text),
  warning: (text) => console.log(chalk.yellow('⚠ ') + text),
  error: (text) => console.log(chalk.red('✖ ') + text),
  title: (text) => console.log(chalk.magenta.bold('\n' + text)),
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const projectName = process.argv[2];

if (!projectName) {
  log.error('Iltimos, loyiha nomini kiriting');
  log.info('Misol: npx create-felix-front my-app');
  process.exit(1);
}

// Framework tanlovini so'rash
async function askFramework() {
  return new Promise((resolve) => {
    log.title('Qaysi frameworkdan foydalanmoqchisiz?');
    console.log(chalk.cyan('1.') + ' Next.js');
    console.log(chalk.cyan('2.') + ' React.js');
    
    rl.question(chalk.yellow('\nRaqamni tanlang (1 yoki 2): '), (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Template nusxalash funksiyasi
function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

// Cleanup function to delete project directory if an error occurs
function cleanup(targetPath) {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
    log.info('Yaratilgan fayllar o\'chirildi.');
  }
}

// Loading animatsiyasi
function startLoading(message) {
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  
  return setInterval(() => {
    process.stdout.write(`\r${chalk.cyan(frames[i])} ${message}`);
    i = (i + 1) % frames.length;
  }, 80);
}

// Asosiy funksiya
async function init() {
  try {
    console.log(chalk.cyan.bold('\n✨ Felix ITS Apps (By: Usmonov Azizbek) ✨'));
    console.log(chalk.dim(appVersion));

    // Foydalanuvchidan framework so'rash
    const framework = await askFramework();
    
    let templateFolder;
    let frameworkName;
    switch(framework) {
      case '1':
        templateFolder = 'nextjs';
        frameworkName = 'Next.js';
        log.success('Next.js template tanladingiz');
        break;
      case '2':
        templateFolder = 'reactjs';
        frameworkName = 'React.js';
        log.success('React.js template tanladingiz');
        break;
      default:
        log.error('Noto\'g\'ri tanlov. Iltimos 1 yoki 2 ni tanlang');
        process.exit(1);
    }

    // Template papkasi yo'li
    const templatePath = path.join(__dirname, '..', 'templates', templateFolder);
    const targetPath = path.join(process.cwd(), projectName);

    // Agar papka mavjud bo'lsa tekshirish
    if (fs.existsSync(targetPath)) {
      log.error(`"${projectName}" nomli papka allaqachon mavjud`);
      process.exit(1);
    }

    // Yangi loyiha papkasini yaratish
    log.info('\nLoyiha yaratilmoqda...');
    fs.mkdirSync(targetPath, { recursive: true });

    // Template fayllarni nusxalash
    const copyingLoader = startLoading('Fayllar nusxalanmoqda...');
    copyDir(templatePath, targetPath);
    clearInterval(copyingLoader);
    process.stdout.write('\r');
    log.success('Fayllar nusxalandi');

    // package.json ni yangilash
    const packageJsonPath = path.join(targetPath, 'package.json');
    const packageJson = require(packageJsonPath);
    packageJson.name = projectName;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2)
    );
    log.success('package.json yangilandi');

    // npm paketlarni o'rnatish
    log.info('\nPaketlar o\'rnatilmoqda...');
    execSync('npm install', { cwd: targetPath, stdio: 'inherit' });

    // Yakuniy xabar
    console.log('\n' + chalk.bold.green('🎉 Loyiha muvaffaqiyatli yaratildi!'));
    log.title('Keyingi qadamlar:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm run felix'));

    log.info('\nLoyihangiz haqida:');
    console.log(`  Framework: ${chalk.cyan(frameworkName)}`);
    console.log(`  Loyiha nomi: ${chalk.cyan(projectName)}`);
    console.log(`  Directory: ${chalk.cyan(targetPath)}`);

  } catch (error) {
    log.error('\nXatolik yuz berdi:');
    console.error(chalk.red(error));
    // Call cleanup if there's an error
    cleanup(path.join(process.cwd(), projectName));
    process.exit(1);
  }
}

// Dasturni ishga tushirish
init().catch((error) => {
  log.error('Kutilmagan xatolik:');
  console.error(chalk.red(error));
  cleanup(path.join(process.cwd(), projectName)); // Ensure cleanup on any unhandled error
  process.exit(1);
});
