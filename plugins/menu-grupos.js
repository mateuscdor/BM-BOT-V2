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
 *✶࿈⃟༆҈➢𝙶𝙴𝚂𝚃𝙸𝙾𝙽𝙰𝚁 𝙶𝚁𝚄𝙿𝙾*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}admins *texto*_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}añadir *numero*_ (desactivado)
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sacar @tag_ (desactivado)
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}save *@tag + nombre de contacto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}daradmin | darpoder *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}quitaradmin | quitarpoder *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}grupo *abierto / cerrado*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable welcome_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable welcome_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable antilink_ *(WhatsApp)*
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable antilink_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable antilink2_ *(https:)*
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable antilink2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable delete_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable  delete_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}link_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}notificar | hidetag *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setdesc *Nueva descripción grupo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}infogrupo_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}invocar *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}del *responder a un mensaje del bot*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fantasmas_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banchat_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unbanchat_
 
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu03|memu03|menugrupo|menugrupos|memugrupo|memugrupos|gestionargrupo|gestionargrupos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

