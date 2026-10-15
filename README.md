# CampusPe Landing Page

A pixel-accurate, fully responsive implementation of the CampusPe landing page built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**.

## 🚀 Live Demo
<!-- Add Vercel URL here after deployment -->

## 🛠 Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## ✨ Features

- ✅ Pixel-accurate design from Figma
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Interactive hover/focus/active states on all CTAs
- ✅ Animated hero section with floating badges
- ✅ Reusable component architecture
- ✅ Sticky navbar with mobile hamburger menu
- ✅ Smooth scroll and animation effects

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout with Inter font
│   └── page.tsx           # Main page
└── components/
    ├── Navbar.tsx             # Sticky nav with mobile menu
    ├── HeroSection.tsx        # Hero with floating cards
    ├── HeroFloatingCard.tsx   # Reusable floating card
    ├── FloatingBadge.tsx      # Avatar badge component
    ├── ServiceCard.tsx        # Reusable service card
    ├── ServiceCardsSection.tsx # Cards grid section
    ├── StatsBar.tsx           # Stats metrics bar
    └── icons.tsx              # SVG icon library
```

## 🏃 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
npm start
```
