# Alen Zimic Portfolio

Personal GitHub Pages site for `https://alenzimic.github.io`, built with Astro.

## Edit Content

Most website text lives in Markdown files under `src/content`.

- `src/content/about/main.md` edits the homepage bio.
- `src/content/experience/*.md` edits research experience cards.
- `src/content/publications/*.md` edits publication cards.
- `src/content/projects/*.md` edits project cards.
- `src/content/funding-awards/*.md` edits funding and awards.
- `src/content/talks/*.md` edits talks and media.
- `src/content/notes/*.md` edits blog-style notes.

Publication entries with `status: "To be submitted"` stay in the content folder but are not shown on the homepage. Visible publication entries automatically get detail pages at `/publications/file-name/`.

Notes automatically get detail pages at `/notes/file-name/`.

Each Markdown file has a small front matter block at the top:

```md
---
title: "Card title"
subtitle: "Optional subtitle"
date: "Date shown on the site"
order: 10
href: "https://official-link.example"
summary: "Short summary used on compact cards"
tags: ["Keyword", "Keyword"]
---

Write the visible body text here.
```

Lower `order` values appear first.

Publication files can also use:

```md
authors: "Author list"
journal: "Journal or venue"
repositoryHref: "https://github.com/example/repo"
dateWritten: "April 25, 2026"
readingTime: "2 min read"
visual: "roots"
```

## Edit Profile Links

Update name, email, GitHub, LinkedIn, and CV path in:

```text
src/lib/profile.ts
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The GitHub Pages workflow in `.github/workflows/deploy.yml` deploys the site after pushing to `main`.
