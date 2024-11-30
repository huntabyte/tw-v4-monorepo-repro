import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// add the tailwindcss vite plugin and it crashes
export default defineConfig({
	plugins: [sveltekit()]
});
