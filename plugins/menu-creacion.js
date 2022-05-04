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
*✶࿈⃟༆҈➢  𝙼𝙴𝙽𝚄 𝙲𝚁𝙴𝙰𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}s_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sticker_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}semoji | emoji_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}emojimix 🐱+😼_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wasted_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stonks_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}trash *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sgay *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}circle *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickermaker_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp2 | s1 | sa *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickerfilter | cs2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tomp3 | mp3 *responde a un video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toimg | img *responde a un sticker*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}togif | gif *responde a sticker/video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytcomentario | ytcomentar *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blur *responde a una imagen*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jaal *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}swm *imagen | video | gif*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovideo *responde a una nota de voz*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wanted *Responda a una foto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}style *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}estilo *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / video|imagen*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / gif*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bass_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}deep_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}earrape_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fast_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fat_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nightcore_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reverse_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}robot_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slow_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tupai
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}smooth_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blown_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vibracion *cantidad*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovn *audio a nota de voz*
 
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-06🔱', `#menu06`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu05|memu05|menucrear|memucrear)$/i
module.exports = handler
