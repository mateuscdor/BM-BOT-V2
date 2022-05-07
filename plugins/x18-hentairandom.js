let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
     if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '❰ ⚠️ ❱ *Lo siento pajin, la función nfsw está desactivada*\n*Escriba #on nsfw para activar esta Función.*'     
    heum = await fetch(`https://api.xteam.xyz/randomimage/hentai?APIKEY=29d4b59a4aa687ca`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hentai 🥵*', '⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰', 'SIGUIENTE 🔄', `${usedPrefix + command}`, m, false)
}
handler.command = /^(hentai|hentay)$/i

module.exports = handler
