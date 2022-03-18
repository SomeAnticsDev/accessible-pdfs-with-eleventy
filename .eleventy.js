const princePdfPlugin = require('eleventy-plugin-prince-pdf');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(princePdfPlugin, {
		pathsToRender: [
			{htmlPath: '/', outputPath: '/menu.pdf'}
		]
	});

	return {
		dir: {
			input: './src',
			output: './_site'
		}
	};
}