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
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logos *_(lista)_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cementerio | logocementerio
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cesped | logocesped
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}coffe | logocoffe
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fire | logofire
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}flaming | logoflaming
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lovemessages | lovemensajes
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}playa | logoplaya
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logorandom
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}romanticdouble | romantico2
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}romanticmessages | romanticms
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logosky
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}taza | logotaza
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}taza2 | logotaza2
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}technology | tecnologia
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}coff
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lolice
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simpcard
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}hornycard
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lblackpink
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logocorazon
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tahta *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nulis | notas *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nulis2 | notas2 *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lolice _@tag_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simpcard _@tag_
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu09|memu09|menulogos|menulogo|memulogo|memulogos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

