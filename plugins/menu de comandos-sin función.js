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

*🙋🏻‍♂️🙋🏼‍♀️ HOLA ${username}*
*BIENVENIDO/A AL MENÚ PRINCIPAL DE...*
            *💎𝐁𝐌-𝐁𝐎𝐓💎*

*✶࿈⃟༆҈➢ 𝙼𝙸𝚂 𝙲𝚁𝙴𝙰𝙳𝙾𝚁𝙴𝚂:*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*🌟⊰⍣⃝ꗮ֠͜⟢ 💎⃟ꦿ𝐌𝐀𝐊𝐀𝐁𝐑𝐎•[🇦🇷]*
*🌟⊰⍣⃝ꗮ֠͜⟢ 🎀⃟᮪〭۬̇〬⃟˖ꪶ𝓑𝓡𝓔𝓔𝓜𔒋᭄[🇦🇷]*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✶࿈⃟༆҈➢ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚄𝚂:*

𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu01* ✦҈͜͡➳(Menú completo)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu02* ✦҈͜͡➳(Información)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu03* ✦҈͜͡➳(Gestionar grupos)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu04* ✦҈͜͡➳(Menú de audios)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu05* ✦҈͜͡➳(Menú crear)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu06* ✦҈͜͡➳(Menú descargas)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu07* ✦҈͜͡➳(Menú juegos)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu08* ✦҈͜͡➳(Anime/Randoms)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu09* ✦҈͜͡➳(Menú de logos)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu10* ✦҈͜͡➳(Chat anónimo)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu11* ✦҈͜͡➳(Comandos +18)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu12* ✦҈͜͡➳(Almacenamiento)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu13* ✦҈͜͡➳(Para el owner)
𖥨ํ∘̥⃟⸽⃟💎 *${usedPrefix}menu14* ✦҈͜͡➳(Tops/Rankings)

✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu|menú|memu|memú|menuprincipal|memuprincipal|help|info|comandos|menu1.2|allmenu|2help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

