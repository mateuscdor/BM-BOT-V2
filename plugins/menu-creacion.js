//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO

//BASE UTILIZADA - GAMES-WABOT
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
let vn = './media/bot.mp3'
  let pp = './Menu2.jpg'
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
*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙼𝙴𝙽𝚄 𝙲𝚁𝙴𝙰𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}s_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sticker_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}semoji | emoji_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}emojimix 🐱+😼_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wasted_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stonks_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}trash *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sgay *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}circle *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickermaker_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp2 | s1 | sa *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickerfilter | cs2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tomp3 | mp3 *responde a un video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toimg | img *responde a un sticker*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}togif | gif *responde a sticker/video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytcomentario | ytcomentar *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blur *responde a una imagen*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jaal *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}swm *imagen | video | gif*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovideo *responde a una nota de voz*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wanted *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}style *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}estilo *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / video|imagen*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / gif*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bass_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}deep_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}earrape_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fast_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fat_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nightcore_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reverse_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}robot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slow_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tupai
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}smooth_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blown_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vibracion *cantidad*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovn *audio a nota de voz*
 
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(Menu05|memu05|menucrear|memucrear)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

