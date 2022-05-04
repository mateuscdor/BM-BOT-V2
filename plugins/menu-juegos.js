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

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO  ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢
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
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-08🔱', `#menu08`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu07|memu07|menujuego|menujuegos|memujuego|memujuegos)$/i
module.exports = handler
