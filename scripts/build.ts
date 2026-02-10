#!/usr/bin/env bun

/**
 * Build script for @bitumo/luno
 * Generates ESM, CJS, and TypeScript declaration files
 */

import { $ } from "bun"
import { rmSync } from "node:fs"

const steps = [
  {
    name: "Clean",
    run: async () => {
      console.log("🧹 Cleaning dist directory...")
      rmSync("dist", { recursive: true, force: true })
    },
  },
  {
    name: "Build CJS",
    run: async () => {
      console.log("📦 Building CommonJS...")
      await $`bun build index.ts --outdir dist --target node --format cjs --sourcemap`
      // Rename to .cjs
      await $`mv dist/index.js dist/index.cjs`
      await $`mv dist/index.js.map dist/index.cjs.map`
    },
  },
  {
    name: "Build ESM",
    run: async () => {
      console.log("📦 Building ES Module...")
      await $`bun build index.ts --outdir dist --target node --format esm --sourcemap`
      // Rename to .mjs
      await $`mv dist/index.js dist/index.mjs`
      await $`mv dist/index.js.map dist/index.mjs.map`
    },
  },
  {
    name: "Build Types",
    run: async () => {
      console.log("📝 Generating TypeScript definitions...")
      await $`tsc --emitDeclarationOnly`
    },
  },
]

async function build() {
  console.log("🚀 Starting build process...\n")

  const startTime = Date.now()

  for (const step of steps) {
    try {
      await step.run()
    } catch (error) {
      console.error(`❌ ${step.name} failed:`, error)
      process.exit(1)
    }
  }

  const duration = Date.now() - startTime
  console.log(`\n✅ Build completed in ${duration}ms`)
}

build()
