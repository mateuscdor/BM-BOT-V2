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
 *✶࿈⃟༆҈➢𝙶𝙴𝚂𝚃𝙸𝙾𝙽𝙰𝚁 𝙶𝚁𝚄𝙿𝙾*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}admins *_texto_* 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}añadir *_numero_* (desactivado)
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sacar _@tag_ (desactivado)
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}save _@tag_ *+ nombre de contacto*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}daradmin | darpoder _@tag_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}quitaradmin | quitarpoder _@tag_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}grupo *_abierto / cerrado_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable welcome
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable welcome
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable antilink *_(WhatsApp)_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable antilink
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable antilink2 *_(https:)_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable antilink2
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable delete
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable  delete
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}link
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}notificar | hidetag *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setname *_Nuevo nombre del grupo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setdesc *_Nueva descripción grupo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}infogrupo
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}invocar *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}del *_responder un msaje del bot_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fantasmas
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banchat
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}unbanchat
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
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

