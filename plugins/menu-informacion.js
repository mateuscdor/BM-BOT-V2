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
 *✶࿈⃟༆҈➢ 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}donar
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}infobot
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}creditos
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reglas
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}grupos
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}estado
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menusimple
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menuaudios
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}instalarbot
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}procesobot
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bug *_tal comando con fallas_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reporte *_tal comando con fallas_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}report *_tal comando con fallas_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}owner
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}contacto
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}join *_enlace del grupo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}unete *_enlace del grupo_* 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bots *_ver bots_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stop
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}jadibot | serbot
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}getcode
 𖥨ํ∘̥⃟⸽⃟💎 ¿Qué es un Bot?
 𖥨ํ∘̥⃟⸽⃟💎 Codigos para audios
 𖥨ํ∘̥⃟⸽⃟💎 Términos y condiciones
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
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

