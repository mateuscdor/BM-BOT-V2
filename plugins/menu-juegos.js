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

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO  ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}math | mates | matemáticas *modo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ttt | tictactoe *nombre del la sala*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}delttt *nombre del la sala*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay2 *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay2 *yo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lesbi *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pajero *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pajera *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}puta *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}puto *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}rata *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}manco *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}manca *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}formarpareja | pareja5_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dado_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simsimi | simi | bot *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}formartrio_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}love *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}amigorandom | amigo | amistad_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slot *cantidad*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ppt *piedra / papel / tijera*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}prostituta *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}prostituto *@tag / nombre*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}doxxear *@tag*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}doxxeame_
 
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

