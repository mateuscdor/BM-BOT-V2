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
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}math | mates | matemáticas *_modo_"
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ttt | tictactoe *_nombre del la sala_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}delttt *_nombre del la sala_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay2 *_@tag_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay2 *_yo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lesbi *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pajero *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pajera *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}puta *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}puto *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}rata *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}manco *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}manca *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}formarpareja | pareja5
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dado
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simsimi | simi | bot *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}formartrio
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}love *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}amigorandom | amigo | amistad
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}slot *_cantidad_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ppt *_piedra / papel / tijera_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}prostituta *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}prostituto *_@tag / nombre_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}doxxear *_@tag_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}doxxeame
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu07|memu07|menujuego|menujuegos|memujuego|memujuegos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

