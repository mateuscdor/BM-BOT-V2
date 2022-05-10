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
*✶࿈⃟༆҈➢ 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}boost | acelerar
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}restart
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banlist
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}virtext1 | traba1
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}actualizar | update
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bc *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcgc *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcbot *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setbye *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banuser *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_public_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable *_public_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}unbanuser *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}listgroup
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_restrict_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable *_restrict_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setwelcome *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_autoread_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable *_autoread_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcbot *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcgc *_texto_*

✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu12|memu12|menupropietario|Menupropietario|Menúpropietario|menúpropietario|menupropietaria|Menupropietaria)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

