# 🤝 Ghid de Contribuție - Bubble Clean SRL

Mulțumim pentru interesul de a contribui la proiectul Bubble Clean SRL!

## 📋 Înainte de a începe

1. **Fork** repository-ul
2. **Clone** fork-ul tău local
3. **Creează** un branch nou pentru modificările tale

```bash
git checkout -b feature/nume-feature
```

## 🏗️ Setup Development

```bash
cd cleanexpert-react
npm install
npm run dev
```

## 📝 Standarde de Cod

### TypeScript
- Folosește **TypeScript strict mode**
- Definește tipuri explicite pentru props și state
- Evită `any` - folosește tipuri specifice

### React & Next.js
- Folosește **App Router** (Next.js 14)
- Componente **funcționale** cu hooks
- Preferă **Server Components** când este posibil
- Folosește **Client Components** (`'use client'`) doar când este necesar

### Styling
- Folosește **Tailwind CSS** pentru styling
- Evită CSS inline sau CSS-in-JS
- Respectă design system-ul existent
- Mobile-first approach

### Naming Conventions
- Components: `PascalCase` (ex: `ScrollExpansionHero.tsx`)
- Files: `kebab-case` pentru non-components (ex: `utils.ts`)
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE`

## 🧪 Testing

Rulează linting înainte de commit:

```bash
npm run lint
```

TypeScript check:

```bash
npx tsc --noEmit
```

## 📦 Commit Guidelines

Folosește **conventional commits**:

```
feat: adaugă funcționalitate nouă
fix: corectează un bug
docs: actualizează documentația
style: formatare cod (fără schimbări funcționale)
refactor: refactorizare cod
perf: îmbunătățire performanță
test: adaugă/actualizează teste
chore: task-uri de mentenanță
```

Exemple:
```bash
git commit -m "feat: adaugă secțiune testimoniale"
git commit -m "fix: corectează animație scroll pe mobile"
git commit -m "docs: actualizează README cu instrucțiuni deployment"
```

## 🔀 Pull Request Process

1. **Update** branch-ul tău cu ultima versiune din `main`
   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Push** modificările tale
   ```bash
   git push origin feature/nume-feature
   ```

3. **Creează** Pull Request pe GitHub
   - Titlu descriptiv
   - Descriere detaliată a modificărilor
   - Screenshot-uri (dacă e cazul)
   - Link-uri către issue-uri relevante

4. **CodeRabbit** va revizui automat PR-ul
   - Răspunde la feedback-ul primit
   - Fă modificările solicitate

5. **Așteaptă** review de la echipă

## ✅ Checklist PR

Înainte de a crea PR, verifică:

- [ ] Codul respectă standardele de cod
- [ ] Nu există erori de linting
- [ ] Nu există erori TypeScript
- [ ] Aplicația build-uiește cu succes
- [ ] Commit messages sunt descriptive
- [ ] Branch-ul este actualizat cu `main`
- [ ] Documentația este actualizată (dacă e cazul)

## 🐛 Raportare Bug-uri

Când raportezi un bug, include:

- **Descriere**: Ce s-a întâmplat
- **Pași de reproducere**: Cum să reproduci bug-ul
- **Comportament așteptat**: Ce ar trebui să se întâmple
- **Screenshots**: Dacă e relevant
- **Browser/Device**: Informații despre mediu
- **Console errors**: Erori din console

## 💡 Sugestii de Funcționalități

Pentru funcționalități noi, deschide un **Issue** mai întâi pentru discuție.

Include:
- **Descriere**: Ce funcționalitate vrei
- **Motivație**: De ce este necesară
- **Cazuri de utilizare**: Cum va fi folosită
- **Mockups**: Dacă ai (opțional)

## 🎨 Design Guidelines

- Respectă paleta de culori existentă
- Folosește componente din `src/components/ui/`
- Asigură-te că design-ul este responsive
- Testează pe multiple device-uri
- Urmează principiile de accesibilitate (WCAG 2.1)

## 📱 Responsive Design

Breakpoints:
- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## ♿ Accessibility

- Folosește HTML semantic
- Adaugă `alt` text pentru imagini
- Asigură-te că site-ul este navigabil cu keyboard
- Respectă raportul de contrast pentru culori
- Testează cu screen readers

## 🚀 Performance

- Optimizează imaginile (WebP, dimensiuni corecte)
- Lazy load pentru conținut sub fold
- Minimizează JavaScript bundle size
- Folosește Next.js Image component

## 📞 Contact

Pentru întrebări sau asistență:
- Deschide un Issue pe GitHub
- Email: dev@bubbleclean.ro

---

**Mulțumim pentru contribuție! 🙏**

