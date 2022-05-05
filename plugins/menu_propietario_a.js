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

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}boost | acelerar_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}restart_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banlist_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}virtext1 | traba1_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}actualizar | update_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bc *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setbye *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banuser *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *public*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *public*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unbanuser *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listgroup_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *restrict*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setwelcome *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*

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

