//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO

//BASE UTILIZADA - GAMES-WABOT
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
let vn = './media/bot.mp3'
  let pp = './Bot.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//   pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*https://ʙᴍ-ʙȯᴛ.com.ar*
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}imagen | image | gimage *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytsearch *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dlaudio *_link yt_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dlvid *_link yt_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytmp3 *_link yt_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytmp4 *_link yt_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play *_titulo del audio_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play.1 *_titulo del audio_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play.2 *_titulo del video_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play2 *_titulo del video_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play3 *_titulo del audio/video_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play6 *_artista y titulo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}letra *_nombredelacanción_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}google *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}googlef *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pinterestvideo | pintvid *_link_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktokaudio *_link del tiktok_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktok *_link_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktok2 | Tiktok2 *_link del tiktok_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}acortar | reducir *_link_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pinterest | pinterest2 *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ssweb | capturar | captura *link*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}animeinfo *_nombre del anime_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpanime | fondoanime
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}verinstagram | verig |igver *_usuario_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ighistorias|historiasig *_usuario_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}twittervideo | twvid *_link de twitter_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wikipedia | wiki | internet *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spotify | spotimusica *_autor, cancion_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}frase *_escriba un número (1 - 99)_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpaesthetic | fondoaesthetic
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu06|memu06|menudescarga|menudescargas|memudescarga|memudescargas)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

