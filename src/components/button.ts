import type { PluginCreator } from "tailwindcss/plugin";

const button: PluginCreator = ({addComponents}) => {
  addComponents({
    '.btn': {
      '@apply cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0': {},
    },
    '.btn-primary': {
      '@apply bg-blue-600 text-white hover:bg-blue-700': {},
    },
    '.btn-secondary': {
      '@apply bg-gray-100 text-gray-900 hover:bg-gray-200': {},
    },
  });
}

export default button;
