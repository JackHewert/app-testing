const firebaseConfig = {
	apiKey: "AIzaSyC-5nozIFEqVyXr7qk91Pv6M_QNCLCMsl8",
	authDomain: "project-app-1-e4156.firebaseapp.com",
	databaseURL: "https://project-app-1-e4156-default-rtdb.firebaseio.com",
	projectId: "project-app-1-e4156",
	storageBucket: "project-app-1-e4156.appspot.com",
	messagingSenderId: "787310012579",
	appId: "1:787310012579:web:28e8d66a3940e4927bb716",
	measurementId: "G-3KMNE3T5TP"
};
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
module.exports = {
	plugins: [
		require('@tailwindcss/forms')
	],
	content: [
		'./src/**/*.html',
		'./src/**/*.vue',
		'./src/**/*.jsx',
		// Add more file paths or glob patterns as needed
	]
};
