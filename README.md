# Portfolio — Abdoul Aziz BANDE

Portfolio personnel au style VS Code : onglets, barre latérale, terminal interactif, thèmes et interface bilingue FR/EN.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS + DaisyUI · Motion · react-router-dom · i18next · EmailJS · PWA

## Démarrage

```bash
npm install --legacy-peer-deps   # l'ancien plugin ESLint v6 entre en conflit avec les peers récents
cp .env.example .env             # puis renseigner les clés EmailJS
npm run dev
```

| Script | Rôle |
| --- | --- |
| `npm run dev` | serveur de développement |
| `npm run build` | `tsc -b` puis build de production |
| `npm run preview` | prévisualise le build |
| `npm run lint` | ESLint |

## Variables d'environnement

Voir `.env.example` : `VITE_EMAILJS_*` (formulaire de contact) et `VITE_CV_PATH_FR` / `VITE_CV_PATH_EN` (optionnel, chemins des CV).

## Structure

```
src/
  screens/      pages (home, about, technologies, projects, contact, pdfPreviewer), chargées en lazy
  components/   Header, Sidebar, TabBar, Footer, Terminal, ThemeDialog, LanguageToggle…
  providers/    thème, état de l'application, routes
  i18n/         traductions FR/EN (src/i18n/locales)
public/         CV (cv.pdf, cv-en.pdf), icônes PWA, og-image
```

## Ajouter un projet

1. Ajouter le logo dans `src/assets/images/`.
2. Ajouter une entrée dans `professionnalProjects` ou `customProjects` (`src/screens/projects/utils.tsx`) avec `name`, `descriptionKey`, `img`, `stack` et, si besoin, `url` / `git`.
3. Ajouter la description sous `projects.descriptions.<descriptionKey>` dans `fr.json` **et** `en.json`.

## Ajouter une compétence

Ajouter un item dans le bon groupe de `src/screens/technologies/utils.tsx` (`expirience` est optionnel).
