# Hilink Travel App

A responsive landing page for **Hilink**, a travel and camping app, built with Next.js 14, TypeScript and Tailwind CSS.

## Features

- **Hero**: a featured camp area (Anawangin Cove, Zambales) with ratings, call-to-action buttons and a location card
- **Camp**: scrolling cards of camp sites, each showing the people who joined
- **Guide**: a section that introduces the app's guidance features
- **Features**: offline maps, adventure scheduling, AR trail guidance and more
- **Get App**: download links for iOS and Android
- **Navbar and Footer**: navigation, contact info and social links
- Responsive layout for mobile, tablet and desktop

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
app/
  layout.tsx      # Root layout with NavBar and Footer
  page.tsx        # Home page that puts the sections together
  globals.css     # Global styles and Tailwind utility classes
components/
  Hero.tsx, Camp.tsx, Guide.tsx, Features.tsx, GetApp.tsx
  NavBar.tsx, Footer.tsx
  shared/Button.tsx
constants/
  index.ts        # Navigation links, features, footer and social data
public/           # Images and icons
```

## Getting Started

Prerequisite: [Node.js](https://nodejs.org/) 18 or later.

```bash
git clone https://github.com/johnnymaluls/travel-app-nextjs.git
cd travel-app-nextjs
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Build the app for production     |
| `npm run start` | Start the production server      |
| `npm run lint`  | Run ESLint                       |

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com/new). Import the repository and Vercel detects the Next.js settings for you.
