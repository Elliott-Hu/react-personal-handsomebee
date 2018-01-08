const _ = require('lodash')

function createMessage(type, info) {
  let message = { type }
  return Object.assign(message, info)
}


const CHAT_GET_INDENTITY = 'CHAT_GET_INDENTITY'
const CHAT_START = 'CHAT_START'
const CHAT_MESSAGE = 'CHAT_MESSAGE' 

const msgType = {
  SYSTEM: 1,
  CLIENT: 2
}

let person = []
let messages = [
  createMessage(msgType.SYSTEM, { desc: '欢迎来到聊天室' }),
  createMessage(msgType.SYSTEM, { desc: '说出你的故事' }),
]



module.exports = server => { 
  const io = require('socket.io')(server, {
    path: '/ws'
  })

  io.on('connection', socket => {
    socket.on(CHAT_START, info => {
      let id = new Date().getTime()

      person.push({ id, name: info.name })
      io.emit(CHAT_GET_INDENTITY, Object.assign({}, info, { id, messages }))
    })

    socket.on(CHAT_MESSAGE, ({ msg, id }) => {
      let idx = _.findIndex(person, item => item.id == id)
      let message = createMessage(msgType.CLIENT, { desc: msg, id, name: person[idx].name })

      messages.push(message)
      io.emit(CHAT_MESSAGE, message)
    })
  })

  return server
}