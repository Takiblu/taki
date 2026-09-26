# taki.dev — Personal Portfolio

Personal website for **Taki** — Full-Stack Developer, FiveM Developer & UI/UX Designer.

Built with **React 19**, **Tailwind CSS 4** and **Bun**.

## Features

- Hero section with typewriter role rotation and animated backdrop
- About, Tech Stack and FiveM development sections
- **Live GitHub integration** — fetches your public repos straight from the GitHub API
- Contact section with Email / Discord / GitHub
- Fully responsive, dark theme, scroll-reveal animations

## Getting started

```bash
bun install
bun run dev      # dev server with hot reload
```

## Configuration

Everything personal lives in [`src/config.ts`](src/config.ts):

```ts
export const siteConfig = {
  name: "Taki",
  githubUsername: "your-github-username", // ← your GitHub username
  email: "taki@example.com",               // ← your email
  discord: "taki",                          // ← your Discord tag
};
```

Set `githubUsername` and the site will automatically load your avatar and
latest public repositories.

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `bun run dev`    | Start dev server (hot reload)  |
| `bun run build`  | Production build -> `dist/`    |
| `bun run start`  | Serve the production build     |

## Deploying

The site is deployed on **GitHub Pages** and auto-deploys on every push to `main`
via the workflow in `.github/workflows/deploy.yml`:

```bash
git push origin main   # that's it — GitHub builds and publishes
```

Live URL: https://takiblu.github.io/taki/
