# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc -b) then Vite production build → dist/
npm run lint      # ESLint on all .ts/.tsx files
npm run preview   # Serve the production build locally
```

There is no test suite configured.

## Tech Stack

- **React 19** with StrictMode, functional components
- **TypeScript 6** — strict mode with `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`
- **Vite 8** — dev server, HMR, production bundler (output: `dist/`)
- **React Compiler** enabled via `babel-plugin-react-compiler` (automatic memoization — do not add manual `useMemo`/`useCallback` unless profiling shows a need)
- **ESLint 9** flat config (`eslint.config.js`) covering TypeScript, react-hooks, and react-refresh rules

## Architecture

Single-page application. Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx`.

TypeScript config is split into two references composed by `tsconfig.json`:
- `tsconfig.app.json` — application source (`src/`), DOM libs, Vite client types
- `tsconfig.node.json` — build-config files (`vite.config.ts`), Node types only

Styling uses plain CSS with CSS variables defined in `src/index.css` and component-scoped `.css` files imported alongside their components.

SVG assets are kept in `public/icons.svg` (sprite sheet) and `src/assets/` (imported directly into components).
