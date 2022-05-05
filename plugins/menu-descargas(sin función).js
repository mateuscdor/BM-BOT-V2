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
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}imagen | image | gimage *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytsearch *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlaudio *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlvid *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp3 *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp4 *link yt*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play *titulo del audio*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.1 *titulo del audio*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.2 *titulo del video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play2 *titulo del video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play3 *titulo del audio/video*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play6 *artista y titulo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}letra *nombredelacanción*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}google *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}googlef *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterestvideo | pintvid *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktokaudio *link del tiktok*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}acortar | reducir *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterest | pinterest2 *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ssweb | capturar | captura *link*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}animeinfo *nombre del anime*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpanime | fondoanime_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verinstagram | verig |igver *usuario*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ighistorias|historiasig *usuario*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}twittervideo | twvid *link de twitter*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wikipedia | wiki | internet *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spotify | spotimusica *autor, cancion*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}frase *escriba un número (1 - 99)*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpaesthetic | fondoaesthetic_
 
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-07🔱', `#menu07`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(ComandoMenuDescargasSinFunciom33333333333333)$/i
module.exports = handler
