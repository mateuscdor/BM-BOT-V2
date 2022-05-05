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

