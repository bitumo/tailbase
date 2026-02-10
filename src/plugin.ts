import tailwindPlugin, { type PluginAPI } from 'tailwindcss/plugin'
import button from './components/button'


const components = [
  button,
];

const plugin = tailwindPlugin((api: PluginAPI) => {
  components.forEach(component => component(api));
}) as ReturnType<typeof tailwindPlugin>;

export default plugin;
