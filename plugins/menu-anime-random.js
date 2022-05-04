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
*🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*
 
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 *✶࿈⃟༆҈➢ 𝚁𝙰𝙽𝙳𝙾𝙼/𝙰𝙽𝙸𝙼𝙴*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pubg_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}doraemon_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jeni_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jisoo_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}rose_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpmontaña | fondomontaña_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpgaming | fondogaming_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}randomwallpaper_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}compartirfoto_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}futbol_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}Messi_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}animal_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}meme_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}meme2_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}meme3_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cat | gato | gata_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dog | perro | perra_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pikachu_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}waifu_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blackpink_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reto_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verdad_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}imagenrandom | random | epico_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}neko_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lolivid_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}iqtest | iq | inteligencia_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}kpopitzy_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}navidad_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}loli_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gawrgura_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}miku_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nyan_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pasticker_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}itachi_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slap_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pat_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}perfil_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}scan | datos | escaneo_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}kpop_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}qr *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}afk | aviso | informo *motivo*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}CristianoRonaldo_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pregunta *pregunta*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}mention | mensaje *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spamchat *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}traducir es *texto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}zodiac | zodiaco *AAAA MM DD*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}readmore | leermas *texto1| texto2*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}calc | calculadora *expresión mat.*_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spamwa *numero|texto|cantidad*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}readqr *responde a un código QR*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}anime *random / waifu / husbu /neko*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agendar *@tag + nombre contacto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}guardar *@tag + nombre contacto*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spam *numero|texto|cantidad*_ 
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spoiler | hidetext *texto1| texto2*_
 𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}experiencia | exp_
 
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙾𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-09🔱', `#menu09`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu08|memu08|menurandom|memurandom|menuanime|memuanime)$/i
module.exports = handler
