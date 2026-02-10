/**
 * E2E Test: Pure CJS Require
 * Tests requiring from a .cjs file (native CommonJS)
 */

const plugin = require("../dist/index.cjs")

console.log("🧪 Testing .cjs require...")

// Test 1: Plugin is defined
if (!plugin || !plugin.default) {
  console.error("❌ Plugin or plugin.default is undefined")
  process.exit(1)
}

// Test 2: Has correct structure
if (typeof plugin.default !== "object") {
  console.error("❌ Plugin.default is not an object")
  process.exit(1)
}

// Test 3: Has handler function
if (typeof plugin.default.handler !== "function") {
  console.error("❌ Plugin.default.handler is not a function")
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
  plugin.default.handler(mockApi)
} catch (error) {
  console.error("❌ Plugin handler threw an error:", error)
  process.exit(1)
}

console.log("✅ All .cjs require tests passed!")
console.log("   - Plugin is defined")
console.log("   - Plugin.default has correct structure")
console.log("   - Plugin.default.handler is callable")
