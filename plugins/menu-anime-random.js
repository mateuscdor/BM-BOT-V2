//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO

//BASE UTILIZADA - GAMES-WABOT
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
let vn = './media/bot.mp3'
  let pp = './Bot.jpg'
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
 *✶࿈⃟༆҈➢ 𝚁𝙰𝙽𝙳𝙾𝙼/𝙰𝙽𝙸𝙼𝙴*
 *✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pubg
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}doraemon
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}jeni
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}jisoo
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}rose
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpmontaña | fondomontaña
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpgaming | fondogaming
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}randomwallpaper
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}compartirfoto
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}futbol
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}Messi
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}animal
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}meme
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}meme2
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}meme3
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cat | gato | gata
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dog | perro | perra
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pikachu
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}waifu_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}blackpink
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reto
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}verdad_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}imagenrandom | random | epico
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}neko
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lolivid
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}iqtest | iq | inteligencia
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}kpopitzy
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}navidad
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}loli
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gawrgura
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}miku
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nyan
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pasticker
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}itachi
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}slap
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pat
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}perfil
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}scan | datos | escaneo
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}kpop_
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}qr *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}afk | aviso | informo *_motivo_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}CristianoRonaldo
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pregunta *_pregunta_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}mention | mensaje *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spamchat *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}traducir es *_texto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}zodiac | zodiaco *_AAAA MM DD_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}readmore | leermas *_texto1| texto2_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}calc | calculadora *_expresión mat_* 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spamwa *_numero|texto|cantidad_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}readqr *_responde a un código QR_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}anime *_random / waifu / husbu /neko_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}agendar *_@tag + nombre contacto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}guardar *_@tag + nombre contacto_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spam *_numero|texto|cantidad_* 
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spoiler | hidetext *_texto1| texto2_*
 𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}experiencia | exp
 
 ✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
 ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu08|memu08|menurandom|memurandom|menuanime|memuanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

