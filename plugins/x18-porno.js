const axios = require('axios')
let handler = async(m, { conn }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Lo siento pajin, la función nfsw está descativada*\n*Escriba #on nsfw para activar esta Función.*'
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/nsfw')
           conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m) 
  }
handler.help = ['porno']
handler.tags = ['images']
handler.command = /^(porno)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
