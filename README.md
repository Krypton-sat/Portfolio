# Portfolio Setup Guide

This portfolio component requires a proper React development environment to run.

## How to Run the Portfolio

### Option 1: Using Vite (Recommended)

1. Open your terminal in this directory
2. Create a Vite React+TypeScript project:
   ```bash
   npm create vite@latest portfolio-app -- --template react-ts
   cd portfolio-app
   ```
3. Replace `src/App.tsx` with the code from `portfolio.tsx`
4. Install dependencies:
   ```bash
   npm install
   ```
5. Install `lucide-react`:
   ```bash
   npm install lucide-react
   ```
6. Run the development server:
   ```bash
   npm run dev
   ```
7. Open the URL shown in your terminal (usually http://localhost:5173)

### Option 2: Quick Setup (if you already have React installed)

1. Install all dependencies:
   ```bash
   npm install react react-dom lucide-react
   npm install --save-dev typescript @types/react @types/node vite
   ```
2. Add this to your `package.json`:
   ```json
   {
     "type": "module",
     "scripts": {
       "dev": "vite",
       "build": "vite build"
     }
   }
   ```
3. Run `npm run dev` and open the local URL

## Files

- `portfolio.tsx` — The main React component
- `portfolio.css` — Companion styles (Tailwind-based)
- `tsconfig.json` — TypeScript configuration (fixed version)
