# 🌞 Bubble Clean SRL - Website Oficial

Website modern și responsiv pentru **Bubble Clean SRL**, companie specializată în curățarea panourilor solare și fotovoltaice din Timișoara.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?logo=tailwind-css)
![License](https://img.shields.io/badge/License-Private-red)

## 🌟 Caracteristici

- ⚡ **Next.js 14** - Framework React de ultimă generație
- 🎨 **Tailwind CSS** - Styling modern și responsiv
- 📱 **Mobile-First Design** - Optimizat pentru toate dispozitivele
- 🎬 **Animații Avansate** - Framer Motion pentru interacțiuni fluide
- 🌐 **Multilingv** - Suport pentru Română și Rusă
- 🎯 **SEO Optimizat** - Meta tags și structură optimizată
- ♿ **Accesibil** - WCAG 2.1 compliant
- 🚀 **Performance** - Încărcare rapidă și optimizată

## 🏗️ Structură Proiect

```
cleanexpert-react/
├── src/
│   ├── app/
│   │   ├── globals.css         # Stiluri globale
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Pagina principală
│   ├── components/
│   │   ├── blocks/
│   │   │   └── scroll-expansion-hero.tsx  # Hero section cu scroll animation
│   │   ├── ui/
│   │   │   └── rainbow-button.tsx         # Buton animat
│   │   ├── rainbow-button-demo.tsx
│   │   └── solar-panel-demo.tsx
│   └── lib/
│       └── utils.ts            # Funcții utilitare
├── public/
│   ├── assets/                 # Imagini și resurse
│   └── video/                  # Videoclipuri
├── .gitignore
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Instalare și Rulare

### Prerequisite

- Node.js 18+ instalat
- npm sau yarn

### 1. Instalare Dependențe

```bash
cd cleanexpert-react
npm install
```

### 2. Rulare Dezvoltare

```bash
npm run dev
```

Aplicația va fi disponibilă la [http://localhost:3000](http://localhost:3000)

### 3. Build Producție

```bash
npm run build
npm start
```

## 📦 Dependențe Principale

- **Next.js 14** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animații
- **Lucide React** - Iconițe
- **class-variance-authority** - Variante componente
- **clsx** & **tailwind-merge** - Utilități CSS

## 🎨 Componente Principale

### ScrollExpansionHero
Hero section cu animație de scroll expansion și video background.

```tsx
import { ScrollExpansionHero } from '@/components/blocks/scroll-expansion-hero'

<ScrollExpansionHero />
```

### RainbowButton
Buton cu efect de gradient animat rainbow.

```tsx
import { RainbowButton } from '@/components/ui/rainbow-button'

<RainbowButton onClick={handleClick}>
  Solicită Ofertă
</RainbowButton>
```

## 🌐 Deployment

### Vercel (Recomandat)

```bash
vercel deploy
```

### Netlify

```bash
npm run build
# Deploy folder: .next
```

## 🔧 Configurare

### Variabile de Mediu

Creați fișierul `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://bubbleclean.ro
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Tailwind CSS

Configurația se află în `tailwind.config.js`. Puteți personaliza:
- Culori
- Fonturi
- Breakpoint-uri
- Animații

## 📱 Servicii

Website-ul prezintă următoarele servicii:

- 🌞 Curățare Panouri Solare
- ⚡ Mentenanță Sisteme Fotovoltaice
- 🔍 Inspecție și Diagnostic
- 📊 Monitorizare Performanță
- 🛠️ Reparații și Optimizări

## 🗺️ Acoperire

- Timișoara și împrejurimi
- Județul Timiș
- Zone limitrofe

## 📞 Contact

- **Email**: contact@bubbleclean.ro
- **Telefon**: +40 XXX XXX XXX
- **Website**: [bubbleclean.ro](https://bubbleclean.ro)

## 🧪 Testing

```bash
# Rulează linter
npm run lint

# Type checking
npm run type-check
```

## 📝 Licență

© 2025 Bubble Clean SRL. Toate drepturile rezervate.

## 👥 Echipa

Dezvoltat cu ❤️ pentru Bubble Clean SRL

---

**Made with Next.js, TypeScript & Tailwind CSS**
