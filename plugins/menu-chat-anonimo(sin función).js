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

*✶࿈⃟༆҈➢🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳Escribe con alguien de manera anónima*

*𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}chatanonimo | anonimochat*
*𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}anonimoch*
*𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}start*
*𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}next*
*𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}leave*

⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄-11🔱', `#menu11`, '🔱𝙼𝙴𝙽𝚄-12🔱', `#menu12`, '🔱𝙼𝙴𝙽𝚄-13🔱', `#menu13`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(ComandoMenuChatAnonimoAnulado777777777777)$/i
module.exports = handler
