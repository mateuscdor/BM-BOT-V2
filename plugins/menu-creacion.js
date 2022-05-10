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
*https://ʙᴍ-ʙȯᴛ.com.ar*
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
    
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙼𝙴𝙽𝚄 𝙲𝚁𝙴𝙰𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}s
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sticker
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}semoji | emoji
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}emojimix 🐱+😼
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wasted
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stonks
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}trash *_Responda a una foto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sgay *_Responda a una foto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}circle *_Responda a una foto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stickermaker
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}attp *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}attp2 | s1 | sa *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stickerfilter | cs2
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tomp3 | mp3 *_responde a un video_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}toimg | img *_responde a un sticker_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}togif | gif *_responde a sticker/video_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytcomentario | ytcomentar *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}blur *_responde a una imagen_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}jaal *_Responda a una foto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}swm *_imagen | video | gif_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tovideo *_responde a una nota de voz_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wanted *_Responda a una foto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}style *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}estilo *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}subirestado *_texto / video|imagen_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}subirestado *_texto / gif_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bass
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}deep
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}earrape
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fast
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fat
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nightcore
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reverse
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}robot
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}slow
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tupai
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}smooth
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}blown
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}vibracion *cantidad*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tovn *audio a nota de voz*
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
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

