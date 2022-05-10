process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw '*❮❗❯ Ingrese un texto o enlace de YouTube*\n\n*✦҈͜͡➳ Ejemplo:*\n*[ ${usedPrefix + command} Bellyache ]*'
//  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '*❮❗❯ No pude encontrar el video, por favor intente ingresar el nombre original de la canción o video*'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  m.reply('𖥨ํ∘̥⃟⸽⃟💎 Descargando...*\n\n*𖥨ํ∘̥⃟⸽⃟💎 Si no obtiene ningun resultado o le sale algun error intente con otro nombre, gracias*')
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`*El servidor ${server} fallo!, reintentando con otro servidor*${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw '*Todos los servidores fallaron*'
  if (yt2 === false) throw '*Todos los servidores fallaron*'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
     *✶࿈⃟༆҈➢ 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*𖥨ํ∘̥⃟⸽⃟💎 Titulo:* _${title}_
*𖥨ํ∘̥⃟⸽⃟💎 Peso del audio:* _${filesizeF}_
*𖥨ํ∘̥⃟⸽⃟💎 Peso del video:* _${yt2.filesizeF}_
`.trim(), '💎BM-BOT💎', '🎵 AUDIO', `.yta ${vid.url}`, '🎥 VIDEO', `.yt ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(reproducir|reproducir2|reproductor|Reproducir|Reproducir2|Reproductor|play3|Play3|playvid|Playvid|playaudio|Playaudio)$/i

handler.exp = 0

module.exports = handler
