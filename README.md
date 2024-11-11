# Create Felix App

Oddiy va tez React va Next.js loyihalarini yaratish uchun CLI tool.

## O'rnatish

```bash
npx create-felix-app my-app
# yoki
npm install -g create-felix-app
create-felix-app my-app
```

## Xususiyatlari

- 🚀 Tez va oson loyiha yaratish
- 🎨 React.js va Next.js frameworklari uchun zamonaviy template
- 📦 Barcha zarur paketlar bilan to'liq o'rnatish
- 🎯 Best practices asosida tuzilgan struktura
- 🛠 Responsive dizayn va UI komponentlar
- 🔄 Avtomatik routing

## Ishlatish

1. CLI ni ishga tushiring:
```bash
create-felix-app my-app
```

2. Framework tanlang:
   - Next.js
   - React.js

3. O'rnatish tugagandan so'ng:
```bash
cd my-app
npm run felix
```

## Next.js Template Tarkibi

- 📁 app/ - App router strukturasi
- 📁 components/ - UI komponentlar
- 📁 public/ - Statik fayllar
- 📁 styles/ - CSS modullar

### Next.js Template Xususiyatlari
- ✅ App Router
- ✅ Server va Client Componentlar
- ✅ CSS Modules
- ✅ Responsive Layout
- ✅ SEO Optimizatsiya
- ✅ Best Practices

## React Template Tarkibi

- 📁 src/
  - 📁 components/
  - 📁 pages/
  - 📁 styles/
- 📁 public/

### React Template Xususiyatlari
- ✅ Create React App
- ✅ React Router
- ✅ Component Struktura
- ✅ CSS Modules
- ✅ Responsive Layout

## Template Customization

Templatelarni o'zingizga moslashtirish uchun:

1. Templates papkasini oching:
```
templates/
  ├── default/     # Next.js template
  └── react/       # React template
```

2. Kerakli o'zgartirishlar kiriting

3. package.json da dependencylarni yangilang

## Contribution

Loyihaga hissa qo'shish uchun:

1. Fork qiling
2. Branch yarating (`git checkout -b feature/amazing`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add feature'`)
4. Branchga push qiling (`git push origin feature/amazing`)
5. Pull Request yarating

## Litsenziya

MIT © [Usmonov Azizbek]

## Muallif

[Usmonov Azizbek] - [usmonovazizbek15@gmail.com]

## Versiya Tarixi

- 1.0.0 - Dastlabki reliz
  - Next.js va React template
  - CLI bilan framework tanlash
  - Avtomatik o'rnatish

## FAQ

**S: Nima uchun create-felix-app?**
J: Oddiy va tez loyiha yaratish uchun. Har safar bir xil strukturani qayta yaratmaslik uchun.

**S: Template qanday sozlanadi?**
J: `templates` papkasida kerakli o'zgartirishlar kiritish mumkin.

**S: TypeScript qo'llab-quvvatlanadimi?**
J: Ha. TypeScript versiyasi mavjud.

## Yordam

Savollar yoki muammolar bo'lsa [Issues](https://github.com/usmonovdev/create-felix-app/issues) bo'limida muhokama qilishingiz mumkin.

## To'g'ri Kelishi

- Node.js 14.0.0 yoki undan yuqori
- npm 6.0.0 yoki undan yuqori

## Bog'liqlik

- React.js
- Next.js
- React Router (React template uchun)
- CSS Modules