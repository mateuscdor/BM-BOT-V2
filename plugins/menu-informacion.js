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

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}* 💖
 
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 *✶࿈⃟༆҈➢ 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}donar_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}infobot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}creditos_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reglas_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}grupos_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}estado_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menusimple_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menuaudios_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}instalarbot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}procesobot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bug *tal comando con fallas*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reporte *tal comando con fallas*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}report *tal comando con fallas*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}owner_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}contacto_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}join *enlace del grupo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unete *enlace del grupo*_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bots *ver bots*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stop_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jadibot | serbot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}getcode_
 𖥨ํ∘̥⃟⸽⃟💎 _¿Qué es un Bot?_
 𖥨ํ∘̥⃟⸽⃟💎 _Codigos para audios_
 𖥨ํ∘̥⃟⸽⃟💎 _Términos y condiciones_
 
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu02|Menú02|memu02|menuinfobot|memuinfobot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

