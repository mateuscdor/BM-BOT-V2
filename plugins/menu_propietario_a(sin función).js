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
*✶࿈⃟༆҈➢ 𝙿𝙰𝚁𝙰 𝙴𝙻 𝙾𝚆𝙽𝙴𝚁*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}boost | acelerar_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}restart_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banlist_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}virtext1 | traba1_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}actualizar | update_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bc *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setbye *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banuser *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *public*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *public*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unbanuser *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listgroup_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *restrict*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setwelcome *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *autoread*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*

⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-14🔱', `#menu14`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(ComandoMenuPropietarioAnulado99999999)$/i
module.exports = handler
