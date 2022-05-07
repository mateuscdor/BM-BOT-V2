let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn}) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Lo siento pajin, la función nsfw está desactivada*\n*Escriba #on nsfw para activar esta Función.*'
try {
let res = await fetch('https://meme-api.herokuapp.com/gimme/porngif')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, 'Pornogif', '💎𝐁𝐌-𝐁𝐎𝐓💎 - ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰')
conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
} catch (e) { }}

handler.help = ['porno2']
handler.tags = ['General']
handler.command = /^(porno2)$/i 
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
