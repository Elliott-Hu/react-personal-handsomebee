const Koa = require('koa')
const app = new Koa()

const websocket = require('./service/websocket')

const webpackMiddleware = require('koa-webpack')
const config = require('./webpack.config.js')

// 热更新
app.use(webpackMiddleware({
  config,
  dev: {
    publicPath: config.output.publicPath,
    logLevel: 'trace'
  },
  hot: {
    noInfo: true
  }
}))

app.use(require('koa-static')(__dirname + '/public'))

const server = require('http').createServer(app.callback())
websocket(server).listen(6688)

