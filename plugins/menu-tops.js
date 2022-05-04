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
*✶࿈⃟༆҈➢ 𝚃𝙾𝙿𝚂/𝚁𝙰𝙽𝙺𝙸𝙽𝙶𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10gays | topgay_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toplind@s | toplind@_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}topput@s | toppt_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toppajer@s | toppajeros_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}topotakus | toptakus_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10integrantes_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10shiposters | topshipost_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10panafrescos_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10lagrasa | top10grasa_
 
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send2ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu14|memu14|menutop|memutop|menutops|memutops)$/i
module.exports = handler