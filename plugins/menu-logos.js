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
*✶࿈⃟༆҈➢
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
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-10🔱', `#menu10`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu09|memu09|menulogos|menulogo|memulogo|memulogos)$/i
module.exports = handler
