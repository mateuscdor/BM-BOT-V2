//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =` 
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
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-04🔱', `#menu04`, '🔱𝙼𝙴𝙽𝚄-05🔱', `menu05`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu03|memu03|menugrupo|menugrupos|memugrupo|memugrupos|gestionargrupo|gestionargrupos)$/i
module.exports = handler
