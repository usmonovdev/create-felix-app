#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const projectName = process.argv[2];

if (!projectName) {
  console.error("Iltimos, loyiha nomini kiriting");
  process.exit(1);
}

// Framework tanlovini so'rash
async function askFramework() {
  return new Promise((resolve) => {
    console.log("\nQaysi frameworkdan foydalanmoqchisiz?");
    console.log("1. Next.js");
    console.log("2. React.js");

    rl.question("Raqamni tanlang (1 yoki 2): ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Template nusxalash funksiyasi
function copyDir(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

// Asosiy funksiya
async function init() {
  try {
    // Foydalanuvchidan framework so'rash
    const framework = await askFramework();

    let templateFolder;
    switch (framework) {
      case "1":
        templateFolder = "nextjs"; // Next.js template
        console.log("\nNext.js template tanladingiz");
        break;
      case "2":
        templateFolder = "reactjs"; // React template
        console.log("\nReact.js template tanladingiz");
        break;
      default:
        console.error("Noto'g'ri tanlov. Iltimos 1 yoki 2 ni tanlang");
        process.exit(1);
    }

    // Template papkasi yo'li
    const templatePath = path.join(
      __dirname,
      "..",
      "templates",
      templateFolder
    );
    const targetPath = path.join(process.cwd(), projectName);

    // Agar papka mavjud bo'lsa tekshirish
    if (fs.existsSync(targetPath)) {
      console.error(`"${projectName}" nomli papka allaqachon mavjud`);
      process.exit(1);
    }

    // Yangi loyiha papkasini yaratish
    console.log("\nLoyiha yaratilmoqda...");
    fs.mkdirSync(targetPath, { recursive: true });

    // Template fayllarni nusxalash
    copyDir(templatePath, targetPath);

    // package.json ni yangilash
    const packageJsonPath = path.join(targetPath, "package.json");
    const packageJson = require(packageJsonPath);
    packageJson.name = projectName;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    // npm paketlarni o'rnatish
    console.log("\nPaketlar o'rnatilmoqda...");
    execSync("npm install", { cwd: targetPath, stdio: "inherit" });

    console.log("\nLoyiha muvaffaqiyatli yaratildi! 🎉");
    console.log(
      `\nLoyihani ishga tushirish uchun quyidagi buyruqlarni bajaring:`
    );
    console.log(`\n  cd ${projectName}`);
    console.log("  npm run dev");
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    process.exit(1);
  }
}

// Dasturni ishga tushirish
init();
