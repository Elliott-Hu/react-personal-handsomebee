const Koa = require('koa')
const app = new Koa()

app.use(require('koa-static')(__dirname + '/public'))

const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })
})

server.listen(6688, '0.0.0.0')