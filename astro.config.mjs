import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js'; 
// import { VitePWA } from 'vite-plugin-pwa';
// import serviceWorker from 'astro-service-worker';

// https://astro.build/config
export default defineConfig({
  integrations: [
		solid()
	]
	// ,serviceWorker()
	// vite: {
  // 	plugins: [VitePWA()],
  // },
});