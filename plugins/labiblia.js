let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw 'ð¥¨à¹âÌ¥ââ¸½âðLo siento pajin, los comandos +18 estan*\n*Escriba #on nsfw para activar esta FunciÃ³n.*'  

  let pp = './+18.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
*https://Êá´-ÊÈ¯á´.com.ar*

*â¶à¿âà¼Òâ¢ ðð¼ââï¸ðð»ââï¸ BIENVENIDO ${username}

*â¶âÍÍÍ========ð ·ð£¥ð ·======== ÍÍÍââ¶*
*â¶à¿âà¼Òâ¢ð¼ð´ð½ð ð³ð´ ð¿ð°ð¹ð¸ð½ð´ð*
*â¶âÍÍÍ========ð ·ð£¥ð ·======== ÍÍÍââ¶*

*â¶à¿âà¼Òâ¢ ð¥µ IMÃGENES ð¥µ*

ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}verlesbianas | imagenlesbians_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}porno_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}contenido18 | 18contenido_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}sideboobs | pechos_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}hentai_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pene_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}ecchi_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pussy_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}boobs_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}panties_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}yaoi_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}yuri_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pack_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pack2_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pack3_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}loli2_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}muslos_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}muslitos_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}booty_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}culo_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}htrap | trapito_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}furro | furry_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}orgy | orgia_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwass_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwbdsm | bdsm_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwcum | cum_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwero | ero_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwfemdom | femdom_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwfoot | foot_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwglass | glass_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nsfwloli_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}xnxxsearch *texto*_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}xnxx *link de xnxx*_


*â¶à¿âà¼Òâ¢ ð¥µ GIF-STICKERS ð¥µ*

ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornogif_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}porno2_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}nekogif_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}yurigif_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}yaoigif_


*â¶à¿âà¼Òâ¢ ð¥µ VÃDEOS ð¥µ*

ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}video_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornovideo | pornovid_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornovidgay | pornogayv_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornolesbivid | pornolesbiv_
ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornobisexualvid | pornobiv_


*â¶à¿âà¼Òâ¢ ð¥µ PREMIUM ð¥µ"

*â¦ÒÍ¡Íâ³ Usar bajo su responsabilidad* 
*â¦ÒÍ¡Íâ³ VÃ­deos +18 aleatorios*
*â¦ÒÍ¡Íâ³ Puede tardar en enviar*

ð¥¨à¹âÌ¥ââ¸½âð _${usedPrefix}pornopremium_
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['labiblia']
handler.tags = ['General']
handler.command = /^(menu11|memu11|labiblia|menuxxx|memuxxx)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
