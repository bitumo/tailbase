# tailbase

A __utility-first UI component library__ built on top of __Tailwind CSS__, designed to help you build modern, consistent interfaces faster.

Instead of shipping framework-level components (like React or Vue components), tailbase provides __high-level, semantic style abstractions__ - such as `.btn`, `.card`, `.badge` - that expand into well-defined Tailwind utility patterns. Think of it as a thin, opinionated __base layer__ on top of Tailwind that's designed for easy customization, not a component framework.

## Why this project?

Tailwind CSS is incredibly powerful, but as projects grows, teams often end up:

- Re-implementing the same buttons, cards, and layouts
- Copy-pasting long utility class strings
- Struggling to keep UI consistent across features

This project aims to solve that by offering **opinionated, reusable UI components** that:

- Stay 100% tailwind-native
- Are easy to customize and extend
- Work with your existing Tailwind setup

## ✨ Features

- __🧱 High-level style abstractions__
  Semantic, reusable classes like `.btn`, `.card`, `.input`, built from tailwind utilities.
- __🎨 Tailwind-first design__
  Implemented using tailwind layers (`@layer components`) and design tokens.
- __🧠 Readable, semantic markup__
  Replace long utility strings with meaningful class names.
- __🔧 Fully customizable__
  Override styles via Tailwind config, CSS variables, or extending the base classes.
- __⚡ Zero runtime overhead__
  Pure CSS. No JavaScript, no framework lock-in.
- __📐 Consistent visual language__
  Shared spacing, colors, typography, and interaction patterns by default.

## Installation

### 1. Install the package

```bash
npm install @bitumo/tailbase
# or
yarn add @bitumo/tailbase
# or
pnpm add @bitumo/tailbase
# or
bun add @bitumo/tailbase
```

### 2. Import in your CSS (Tailwind CSS v4)

Add tailbase to your CSS file after importing Tailwind:

```css
@import "tailwindcss";
@import "@bitumo/tailbase";
```

### Alternative: Add to Tailwind config (Tailwind CSS v3)

If you're using Tailwind CSS v3 or prefer the config approach:

```js
// tailwind.config.js
import tailbase from '@bitumo/tailbase'

export default {
  plugins: [tailbase],
}
```

Or with CommonJS:

```js
// tailwind.config.js
const tailbase = require('@bitumo/tailbase')

module.exports = {
  plugins: [tailbase],
}
```

## Example

```html
<button class="btn btn-primary">Click me</button>

<div class="card">
  <h3 class="card-title">Card title</h3>
  <p class="card-body">This is a simple card using semantic styles.</p>
</div>
```

Each class is implemented as a __composition of Tailwind utilities__, giving you consistency without sacrificing control.

## Who is this for?

- Teams using Tailwind CSS who want cleaner, more semantic HTML
- Developers tired of repeating long utility class chains
- Projects that want a **lightweight, customizable base layer** without adopting a full component framework

## Non-goals
- ❌ Shipping a framework-level UI components (React/Vue/Svelte)
- ❌ Replacing Tailwind CSS
- ❌ Hiding Tailwind behind complex or opaque abstractions

This library is meant to __sit on top of Tailwind__, not replace it.


## Development

### Building from source

```bash
# Install dependencies
bun install

# Build the package (creates ESM, CJS, and TypeScript definitions)
bun run build
```

The build script (`scripts/build.ts`) creates:
- `dist/index.mjs` - ES Module build
- `dist/index.cjs` - CommonJS build
- `dist/index.d.ts` - TypeScript definitions
- Source maps for all builds

### Testing

```bash
# Run all unit tests
bun test

# Run E2E import/require tests
bun run test:e2e
```

E2E tests verify:
- Native `.mjs` imports work (`test/e2e-mjs.mjs`)
- Native `.cjs` requires work (`test/e2e-cjs.cjs`)
- CSS imports work with Tailwind CSS v4 (`test/e2e-css.ts`)

## Status

__🚧 Early stage / Work in progress__

APIs, naming, and component coverage may change as the project evolves.

## Inspiration

Inspired by projects like Tailwind UI, shadcn/ui, and the broader utility-first design philosophy - focused on __clarify, flexibility, and developer experience__.

## License

MIT
