# 🚀 Ghid Configurare GitHub - Bubble Clean SRL

## 📋 Pași pentru Upload pe GitHub

### 1. Creează Repository pe GitHub

1. Accesează [github.com](https://github.com) și loghează-te
2. Click pe **"+"** → **"New repository"**
3. Completează detaliile:
   - **Repository name**: `bubble-clean-website` (sau alt nume)
   - **Description**: "Website oficial Bubble Clean SRL - Curățare panouri solare Timișoara"
   - **Visibility**: Alege **Private** sau **Public**
   - **NU** selecta "Initialize with README" (avem deja README.md)
4. Click **"Create repository"**

### 2. Inițializează Git Local

Deschide PowerShell/Terminal în directorul `cleanexpert-react`:

```bash
cd cleanexpert-react

# Inițializează git (dacă nu e deja inițializat)
git init

# Adaugă toate fișierele
git add .

# Primul commit
git commit -m "Initial commit: Bubble Clean SRL website setup"
```

### 3. Conectează cu GitHub

Copiază comenzile de pe GitHub (după crearea repository-ului) sau folosește:

```bash
# Adaugă remote origin (înlocuiește USERNAME și REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Sau cu SSH (recomandat)
git remote add origin git@github.com:USERNAME/REPO_NAME.git

# Verifică remote
git remote -v

# Push pe main branch
git branch -M main
git push -u origin main
```

### 4. Configurare GitHub Secrets (pentru GitHub Actions)

Pentru ca GitHub Actions să funcționeze, trebuie să adaugi secrets:

1. Pe GitHub, mergi la repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Adaugă următoarele (dacă sunt necesare):

#### Pentru Vercel Deployment:
- `VERCEL_TOKEN` - Token de la Vercel
- `VERCEL_ORG_ID` - Organization ID
- `VERCEL_PROJECT_ID` - Project ID

#### Pentru alte servicii:
- `GOOGLE_MAPS_API_KEY` - Pentru Google Maps
- `GA_ID` - Pentru Google Analytics

### 5. Activează GitHub Actions

După primul push:
1. Mergi la tab-ul **Actions** pe GitHub
2. Workflows-urile vor apărea automat
3. Prima rulare se va declanșa automat

### 6. Configurare CodeRabbit

1. Accesează [coderabbit.ai](https://coderabbit.ai)
2. Click **"Sign up with GitHub"**
3. Autorizează accesul la repository-uri
4. Selectează repository-ul `bubble-clean-website`
5. CodeRabbit va începe să monitorizeze Pull Requests

#### Verificare CodeRabbit:
- Creează un Pull Request de test
- CodeRabbit va comenta automat cu sugestii
- Poți răspunde la sugestii direct în PR

### 7. Protejează Branch-ul Main

Pentru siguranță, protejează branch-ul main:

1. **Settings** → **Branches** → **Add branch protection rule**
2. Branch name pattern: `main`
3. Activează:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Include administrators (opțional)
4. Save changes

### 8. Invită Colaboratori (opțional)

Dacă lucrezi în echipă:

1. **Settings** → **Collaborators**
2. Click **"Add people"**
3. Introdu username/email
4. Selectează permisiuni (Write/Maintain/Admin)

## 🔄 Workflow Zilnic

### Crearea unui Feature Nou

```bash
# Creează branch nou
git checkout -b feature/nume-feature

# Lucrează la cod...

# Commit-uri frecvente
git add .
git commit -m "feat: adaugă funcționalitate X"

# Push branch
git push origin feature/nume-feature
```

### Crearea Pull Request

1. Pe GitHub, vei vedea notificare pentru branch nou
2. Click **"Compare & pull request"**
3. Completează:
   - **Title**: Descriere scurtă
   - **Description**: Detalii despre modificări
   - **Reviewers**: Adaugă coechipieri (opțional)
4. Click **"Create pull request"**
5. **CodeRabbit** va revizui automat codul
6. După aprobare, **Merge pull request**

### Sincronizare cu Main

```bash
# Switch la main
git checkout main

# Pull ultimele modificări
git pull origin main

# Merge în branch-ul tău (opțional)
git checkout feature/nume-feature
git merge main
```

## 🛠️ Comenzi Utile Git

### Status și Istorice
```bash
# Vezi status
git status

# Vezi istoricul
git log --oneline --graph

# Vezi diferențe
git diff
```

### Branch Management
```bash
# Listă branch-uri
git branch -a

# Șterge branch local
git branch -d feature/old-feature

# Șterge branch remote
git push origin --delete feature/old-feature
```

### Undo Changes
```bash
# Undo uncommitted changes
git restore .

# Undo last commit (păstrează modificările)
git reset --soft HEAD~1

# Undo last commit (șterge modificările)
git reset --hard HEAD~1
```

## 📱 GitHub Desktop (Alternativă)

Dacă preferi interfață grafică:

1. Descarcă [GitHub Desktop](https://desktop.github.com/)
2. Loghează-te cu contul GitHub
3. **File** → **Add local repository**
4. Selectează directorul `cleanexpert-react`
5. Folosește interfața pentru commit, push, pull

## 🔐 SSH Setup (Recomandat)

Pentru autentificare fără parolă:

### Windows (PowerShell)
```powershell
# Generează SSH key
ssh-keygen -t ed25519 -C "email@example.com"

# Start SSH agent
Start-Service ssh-agent

# Adaugă key
ssh-add ~\.ssh\id_ed25519

# Copiază public key
Get-Content ~\.ssh\id_ed25519.pub | clip
```

### Adaugă pe GitHub
1. **Settings** → **SSH and GPG keys**
2. **New SSH key**
3. Paste key-ul copiat
4. Save

## 📊 GitHub Badges (Opțional)

Adaugă badges în README.md:

```markdown
![GitHub last commit](https://img.shields.io/github/last-commit/USERNAME/REPO_NAME)
![GitHub issues](https://img.shields.io/github/issues/USERNAME/REPO_NAME)
![GitHub stars](https://img.shields.io/github/stars/USERNAME/REPO_NAME)
```

## 🎯 Checklist Final

Înainte de primul push:

- [ ] `.gitignore` configurat corect
- [ ] README.md completat
- [ ] LICENSE adăugat
- [ ] Fișiere sensibile (.env) ignorate
- [ ] Build funcționează: `npm run build`
- [ ] Linting fără erori: `npm run lint`
- [ ] Repository creat pe GitHub
- [ ] Remote origin adăugat
- [ ] Primul commit făcut

După primul push:

- [ ] GitHub Actions rulează cu succes
- [ ] CodeRabbit activat și funcțional
- [ ] Branch protection activat
- [ ] Colaboratori invitați (dacă e cazul)
- [ ] Secrets configurate (dacă e cazul)

## 🆘 Troubleshooting

### Eroare: "Permission denied (publickey)"
- **Soluție**: Configurează SSH key (vezi mai sus)

### Eroare: "Repository not found"
- **Soluție**: Verifică remote origin: `git remote -v`

### Eroare: "Failed to push"
- **Soluție**: Pull mai întâi: `git pull origin main`

### Conflict la merge
- **Soluție**: Rezolvă manual conflictele, apoi:
  ```bash
  git add .
  git commit -m "fix: rezolvă conflicte"
  ```

## 📞 Ajutor

Pentru probleme:
- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [CodeRabbit Docs](https://docs.coderabbit.ai)

---

**Succes cu proiectul! 🚀**

