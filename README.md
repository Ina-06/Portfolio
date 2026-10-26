# Player One: Ibrahim Araji's Portfolio

An interactive comic-book / arcade portfolio. Scroll to turn the pages of a 3D book that tells my story, from where I am now, through how it started, to what I've built and where I'm going.

**Live:** [ibrahimaraji.netlify.app](https://ibrahimaraji.netlify.app)

<!-- TODO: add a screenshot of the cover or Page 03, e.g. docs/screenshot.png -->
![Portfolio screenshot](docs/screenshot.png)

## Features

- **Scroll-driven page flips:** each scroll step turns a page of a 3D book with CSS perspective transforms.
- **Arcade intro:** an "Insert Coin" loading screen with a pixel-art avatar.
- **Interactive work timeline:** click a node to read that role's details.
- **Responsive layout:** below 900px the book flattens into a single scrolling column for phones.
- **Working contact form:** a Next.js route handler sends messages through Resend.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Resend · Netlify

## Run it locally

```bash
git clone https://github.com/Ina-06/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open http://localhost:3000.

The contact form needs a [Resend](https://resend.com) API key. Create `.env.local` with:

```bash
RESEND_API_KEY=your_key
CONTACT_TO_EMAIL=you@example.com
```

The rest of the site works without it.
