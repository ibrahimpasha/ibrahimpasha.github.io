# Robotics Portfolio — Ibrahim Mohammad

Static portfolio site for showcasing robotics and embodied AI work.
Built with Next.js 16 + Tailwind v4, exported as static HTML, hosted on
GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project content

Project metadata lives in `lib/projects.ts`. Each project also has its own
detail page at `app/projects/<slug>/page.tsx`. To add a new project:

1. Add an entry to `projects` in `lib/projects.ts`.
2. Create `app/projects/<slug>/page.tsx` following any existing one as a
   template.

To swap the BDX video / project media for real footage, replace the
`MediaPlaceholder` usage with a `<video>` or `<img>` tag pointing at a file
under `public/`.

## Deploy to GitHub Pages

The site auto-detects whether you're hosting on a **user site**
(`<username>.github.io`) or a **project site** (any other repo name) and
configures `basePath`/`assetPrefix` accordingly via the workflow.

### Recommended — user site (clean root URL)

1. Create a public GitHub repo named `<your-username>.github.io`.
2. Push this directory to its `main` branch.
3. In repo Settings → Pages, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
   and deploys automatically. The site lives at
   `https://<your-username>.github.io`.

### Alternative — project site

1. Create any repo (e.g. `portfolio`).
2. Push this directory to its `main` branch.
3. In repo Settings → Pages, set **Source** to **GitHub Actions**.
4. The site lives at `https://<your-username>.github.io/<repo-name>/`.

## TODOs before going public

- Replace media placeholders in `app/page.tsx` and each project page with
  real BDX / LeKiwi / ACT footage. Put videos in `public/` and reference
  them with regular `<video>` tags.
- Set real GitHub and Hugging Face profile URLs in the `Contact` section
  of `app/page.tsx`.
- Update the `Press` items in `app/page.tsx` with real links if desired.
