// real paths to the dirs

const path = require('path')

const dirs = {
    public: path.join(__dirname, '../public'),
    dist: path.join(__dirname, '../dist'),
    src: path.join(__dirname, '../src'),
}


const subDirs = {
  assets: 'assets/',

  static: 'static/'
}

module.exports = {
  ...dirs,
  ...subDirs
}