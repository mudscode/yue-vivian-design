# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Response Style — Caveman Mode (ALWAYS ON)

Every response uses caveman mode. Short. Blunt. Low token count. Save context.

- No filler. No "Great question!", no "I'll now...", no recap of what I just said.
- No closing summaries unless asked.
- Bullets and code over prose.
- Plans = numbered list, one line each.
- Explanations only when asked, and even then — terse.
- Acknowledgements: one word ("done", "fixed", "ok") when that's all that's needed.

Caveman ≠ rude. Just compressed.

## Working Rules

### Plan First
Default behavior: **propose a plan, wait for approval, then execute.**
- Plan = numbered steps, files touched, what changes in each.
- Only skip the plan for one-line trivia ("rename this var", "fix this typo").
- After approval, execute. Don't re-explain the plan.

### No Jugaads
No quick patches, no workarounds, no `// TODO: fix later`, no `any` to silence the compiler, no commented-out code "just in case." Fix the root cause.

If the proper fix grows beyond the requested scope (extra files, refactors, dependency changes) → **stop and ask before proceeding.** Don't silently expand the blast radius.

### File Reading
- Grep/search first to locate relevant code, then Read with `offset` + `limit`.
- Don't re-read a file already in context — scroll back.
- Read whole files only when the file is small or you genuinely need the full thing.

### Always Verify Before "Done"
After any code change, run:
```bash
npm run lint
npm run build   # runs tsc -b then vite build
```
Don't claim a task is complete until both pass. If either fails, fix it or report it.

### Flag Significant Issues
While working in a file, call out **significant** problems you spot — bugs, type holes, leaks, dead code, unsafe patterns, perf footguns. Don't nitpick formatting, naming preferences, or stylistic micro-choices. If unsure whether it's significant: it probably isn't.

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
- **Tailwind CSS** for styling
- **Zustand** for shared/global state
- **React Context** for cross-cutting concerns (theme, auth, etc.)
- **TanStack Query (React Query)** for server state and data fetching

## Architecture

Single-page application. Entry chain: `index.html` → `src/main.tsx` → `src/App.tsx`.

TypeScript config is split into two references composed by `tsconfig.json`:
- `tsconfig.app.json` — application source (`src/`), DOM libs, Vite client types
- `tsconfig.node.json` — build-config files (`vite.config.ts`), Node types only

SVG assets are kept in `public/icons.svg` (sprite sheet) and `src/assets/` (imported directly into components).

## Code Conventions

### Files & Components
- **One component per file.** Co-locate component-specific CSS next to the component.
- **PascalCase** for component files (`UserCard.tsx`) and component exports.
- **camelCase** for everything else — utils, hooks (`useFoo.ts`), stores, types files.
- **Named exports preferred** over default exports.

### TypeScript
- **Explicit types everywhere** — don't rely on inference for function signatures, return types, or variables that aren't trivially obvious.
- **`interface` for component props and object shapes.**
- **`type` for unions, intersections, and utility types.**
- No `any`. No `as` casts to silence errors — fix the type.

### Comments
Comment the **why**, never the **what**. If the code needs a comment to explain *what* it does, rewrite the code instead.

### State Management
- **Local first** — useState/useReducer until it actually needs to be shared.
- **Zustand** for shared client state across unrelated components.
- **Context** for cross-cutting concerns that don't change often (theme, auth, locale).
- **TanStack Query** for anything coming from the network. Don't roll custom fetch hooks.

### Errors
Try/catch where errors can realistically occur. Log meaningfully. Recover gracefully — surface a useful state to the user, don't crash the tree.

### Styling
**Tailwind CSS.** Note: existing code uses plain CSS with CSS variables in `src/index.css` and component-scoped `.css` files. New components → Tailwind. When editing existing components, ask before migrating their styles.

## Things to Never Do

- Add `useMemo`/`useCallback` without a profiling reason (React Compiler handles it)
- Use default exports for new modules
- Use `any` or `as unknown as X` to bypass type errors
- Leave commented-out code in commits
- Claim a task is done without running lint + build
- Silently expand scope beyond what was requested