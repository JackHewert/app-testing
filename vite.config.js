import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			'@': './src',
		},
	},
	build: {
		build: {
			rollupOptions: {
				external: ['firebase/database', 'js/tag.js'],
				input: {
					index: resolve(__dirname, './index.html'),
					demo: resolve(__dirname, './live-demo.html'),
					login: resolve(__dirname, './login.html'),
				},
			},
		},
	}
});

/* 

*/
