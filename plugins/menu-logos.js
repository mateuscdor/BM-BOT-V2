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
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logos_ *(lista)*
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cementerio | logocementerio_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cesped | logocesped_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}coffe | logocoffe_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fire | logofire_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}flaming | logoflaming_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lovemessages | lovemensajes_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}playa | logoplaya_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logorandom_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}romanticdouble | romantico2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}romanticmessages | romanticms_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logosky_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}taza | logotaza_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}taza2 | logotaza2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}technology | tecnologia_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}coff_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lolice_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simpcard_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}hornycard_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lblackpink_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logocorazon_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tahta *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nulis | notas *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nulis2 | notas2 *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lolice *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simpcard *@tag*_
 
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

