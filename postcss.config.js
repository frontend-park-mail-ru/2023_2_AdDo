
/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('autoprefixer'),
      require('postcss-nested'),
      require('postcss-short'),
      require('postcss-assets'),
    ]
  }
  
  module.exports = config