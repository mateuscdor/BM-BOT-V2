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

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}imagen | image | gimage *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytsearch *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlaudio *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlvid *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp3 *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp4 *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play *titulo del audio*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.1 *titulo del audio*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.2 *titulo del video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play2 *titulo del video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play3 *titulo del audio/video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play6 *artista y titulo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}letra *nombredelacanción*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}google *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}googlef *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterestvideo | pintvid *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktokaudio *link del tiktok*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}acortar | reducir *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterest | pinterest2 *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ssweb | capturar | captura *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}animeinfo *nombre del anime*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpanime | fondoanime_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verinstagram | verig |igver *usuario*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ighistorias|historiasig *usuario*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}twittervideo | twvid *link de twitter*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wikipedia | wiki | internet *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spotify | spotimusica *autor, cancion*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}frase *escriba un número (1 - 99)*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpaesthetic | fondoaesthetic_
 
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

