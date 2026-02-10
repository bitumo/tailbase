/**
 * E2E Test: Pure MJS Import
 * Tests importing from a .mjs file (native ES module)
 */

import plugin from "../dist/index.mjs"

console.log("🧪 Testing .mjs import...")

// Test 1: Plugin is defined
if (!plugin) {
  console.error("❌ Plugin is undefined")
  process.exit(1)
}

// Test 2: Has handler function
if (typeof plugin.handler !== "function") {
  console.error("❌ Plugin handler is not a function")
  process.exit(1)
}

// Test 3: Plugin is an object
if (typeof plugin !== "object") {
  console.error("❌ Plugin is not an object")
  process.exit(1)
}

// Test 4: Can call handler without throwing
try {
  const mockApi = {
    addComponents: () => {},
    addUtilities: () => {},
    theme: () => {},
    config: () => {},
  }
  plugin.handler(mockApi)
} catch (error) {
  console.error("❌ Plugin handler threw an error:", error)
  process.exit(1)
}

console.log("✅ All .mjs import tests passed!")
console.log("   - Plugin is defined")
console.log("   - Plugin has handler function")
console.log("   - Plugin is callable")
