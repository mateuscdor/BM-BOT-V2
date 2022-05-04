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
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-03🔱', `#menu03`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu02|Menú02|memu02|menuinfobot|memuinfobot)$/i
module.exports = handler
