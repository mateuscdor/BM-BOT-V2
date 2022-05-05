let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  await conn.send3Button(m.chat, `
*https://ʙᴍ-ʙȯᴛ.com.ar*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴 𝙱𝙼-𝙱𝙾𝚃*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*𖥨ํ∘̥⃟⸽⃟💎 Estado: Bot activo ✅*
*𖥨ํ∘̥⃟⸽⃟💎 Privacidad: Bot de uso público 🔓

`.trim(), '⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰', '🔱MENÚ🔱', `${usedPrefix}menu`, '🔱MENÚ COMPLETO🔱', `${usedPrefix}menucompleto`, '🔱MENÚ DE AUDIOS🔱', `${usedPrefix}menuaudios`)
}
handler.command = /^(estado|status|estate|state|stado|stats)$/i

handler.exp = 0

module.exports = handler
