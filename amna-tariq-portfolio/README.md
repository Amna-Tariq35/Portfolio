# Amna Tariq — Portfolio

A single-page Next.js 14 (App Router) portfolio built with TypeScript and Tailwind CSS.

## Design

- **Palette:** deep ink-pine background (`#0F1F1B`), warm brass gold accent (`#C9A227`), muted clay/rose secondary (`#C97B63`), ivory text (`#F3EEE3`).
- **Type:** Fraunces (serif display, used with restraint for headlines) + Inter (body) + JetBrains Mono (labels, tags, dates).
- **Signature element:** the "build log" — a vertical rail with nodes connecting each featured project, in shipping order.

## Folder structure

```
amna-portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata, root HTML shell
│   ├── page.tsx           # assembles all sections
│   └── globals.css        # design tokens, base styles, scroll-reveal
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── RevealOnScroll.tsx # scroll-triggered fade/slide-up wrapper
├── data/
│   └── projects.ts        # all portfolio content lives here
├── public/                # put a resume PDF / favicon here if you want one
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, then import the repo on [vercel.com](https://portfolio-chi-ecru-90.vercel.app/) — no config needed, it auto-detects Next.js.

## To personalize further

- All text content (projects, skills, education, email, phone) lives in `data/projects.ts` — edit it in one place.
- To add a resume download button, drop `resume.pdf` in `public/` and add a link in `components/Header.tsx`.
- To add project screenshots, put images in `public/projects/` and render them with `next/image` inside `ProjectCard.tsx`.
