<div align="center">

# Nix

**The digital storefront for macOS's missing window manager.**

This repository contains the marketing, distribution, and informational landing page for Nix — a native macOS utility that automatically quits applications when their last window is closed.

<br>

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Deployment](https://img.shields.io/badge/deployment-Vercel-black?style=flat-square&logo=vercel)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

<br>

</div>

---

## What is this?

This is the source code for [nix-mu.vercel.app](https://nix-mu.vercel.app), the official landing page for the Nix macOS application. 

While the Nix app itself handles the low-level systems engineering of managing macOS window lifecycles via the Accessibility API, this website serves as its public face. Its primary purpose is to clearly articulate the problem Nix solves (macOS apps persisting in the background after windows close), demonstrate the app's native interface, outline privacy guarantees, and drive secure downloads and license purchases.

It is built to be fast, accessible, and visually aligned with Apple's Human Interface Guidelines — ensuring the user experience feels premium and native before the app is even installed.

---

## Tech Stack

The website uses a modern React-based stack optimized for static performance, seamless animations, and zero-configuration deployments.

| Technology | Used For |
|---|---|
| Next.js | Core framework, routing, and static site generation |
| React | UI component architecture |
| Tailwind CSS | Utility-first styling and responsive design |
| Framer Motion | Scroll-linked animations and layout transitions |
| Lemon Squeezy | Checkout flows and license key distribution |
| Vercel | Edge CDN hosting and automated CI/CD deployments |
| Lucide React | Clean, consistent iconography |

---

## Features

**Core layout**
- **Hero section:** High-converting entry point with clear value proposition and floating mockup animations.
- **Problem statement:** Visual demonstration of "closing a window" vs. "quitting an app."
- **Feature highlights:** Grid breakdown of per-app rules, grace periods, and native design.
- **Comparison table:** Head-to-head breakdown against existing alternatives (reused from the app's README).
- **Privacy guarantee:** Clear articulation of the zero-telemetry, local-first architecture.
- **Pricing & Checkout:** Integration with Lemon Squeezy for secure one-time purchases.

**Design implementation**
- **Scroll-driven reveal:** Elements fade and slide in smoothly as they enter the viewport via Intersection Observers.
- **Dark mode exclusive:** Hardcoded dark theme with subtle noise textures and glassmorphic (`backdrop-blur`) navigation to match the macOS aesthetic.
- **Responsive design:** Fluid scaling from mobile viewports to ultra-wide desktop displays.

---

## Project Structure

The codebase follows standard Next.js App Router conventions, keeping components highly modular and strictly separating UI from static assets.

```text
nix-website/
├── public/
│   ├── images/               # App screenshots, mockups, and icons
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Global HTML shell, fonts, and noise texture
│   │   ├── page.jsx          # Main landing page composition
│   │   └── globals.css       # Tailwind base layers and CSS variables
│   ├── components/
│   │   ├── nix/              # Domain-specific components
│   │   │   ├── Hero.jsx
│   │   │   ├── Nav.jsx
│   │   │   ├── Problem.jsx
│   │   │   └── Pricing.jsx
│   │   └── ui/               # Reusable, generic UI primitives
│   └── lib/
│       └── utils.js          # Helper functions (e.g., class merging)
├── package.json
├── tailwind.config.js
└── next.config.mjs
```

---

## Local Development

### Clone and open

```bash
git clone https://github.com/sahanmaiti/Nix_Website.git
cd Nix_Website/frontend
```

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run dev
```

The site will launch at `http://localhost:3000`. Hot module replacement (HMR) is enabled by default.

---

## Deployment

This repository is continuously deployed via **Vercel**. 

Production deployments are triggered automatically whenever code is merged into the `main` branch. Vercel handles the build process, asset optimization, and CDN invalidation. 

To deploy your own fork:
1. Create a Vercel account and link your GitHub repository.
2. Import the repository.
3. Vercel will automatically detect the Next.js framework and configure the build settings (`npm run build`).

---

## Design Philosophy

Just as the Nix macOS app is built without Electron, web views, or bloated third-party frameworks, the Nix website is built to be equally deliberate. 

We avoid heavy client-side JavaScript wherever possible. Animations are handled efficiently by Framer Motion leveraging CSS transforms and GPU compositing. The visual aesthetic relies on raw CSS gradients, subtle SVG noise layers, and system-native typography rather than massive image payloads. The result is a marketing site that feels as lightweight, responsive, and disciplined as the native Mac utility it promotes.

---

## Contributing

Contributions are welcome, particularly for performance optimizations, accessibility (a11y) improvements, or cross-browser rendering fixes.

```bash
# Fork the repo, then:
git clone https://github.com/[PLACEHOLDER: yourusername]/Nix_Website.git
cd Nix_Website/frontend
git checkout -b feature/your-feature-name

# Make changes, then:
git commit -m "descriptive message"
git push origin feature/your-feature-name
# Open a pull request on GitHub
```

**Code style:** Use functional React components, standard Tailwind class sorting, and prefer early returns. Avoid adding new npm dependencies unless strictly necessary.

---

## License

The website source code is available under the [MIT License](LICENSE). 

*Note: The Nix application itself, its compiled binaries, branding, and logos are proprietary and all rights are reserved.*

---

<div align="center">

<br>

Designed on a Mac, for Mac.

*Nix Website — Next.js — Vercel*

</div>
