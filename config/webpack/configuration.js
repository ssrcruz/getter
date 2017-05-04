// Common configuration for webpacker loaded from config/webpack/paths.yml

const { join, resolve } = require('path')
const { env } = require('process')
const { safeLoad } = require('js-yaml')
const { readFileSync } = require('fs')

const configPath = resolve('config', 'webpack')
const loadersDir = join(__dirname, 'loaders')
const paths = safeLoad(readFileSync(join(configPath, 'paths.yml'), 'utf8'))
const devServer = safeLoad(readFileSync(join(configPath, 'development.server.yml'), 'utf8'))
const publicPath = env.NODE_ENV !== 'production' && devServer.enabled ?
  `http://${devServer.host}:${devServer.port}/` : `/${paths.entry}/`

module.exports = {
  devServer,
  env,
  paths,
  loadersDir,
  publicPath,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  }
}
