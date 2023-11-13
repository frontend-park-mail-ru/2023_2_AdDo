module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,ico,html,png,jpg,svg}'
	],
	swDest: 'dist/sw.js',
    swSrc: 'src/src-sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	debugger: false,
};