let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '𖥨ํ∘̥⃟⸽⃟💎Lo siento pajin, los comandos +18 estan*\n*Escriba #on nsfw para activar esta Función.*'  

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
*https://ʙᴍ-ʙȯᴛ.com.ar*

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙿𝙰𝙹𝙸𝙽𝙴𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✶࿈⃟༆҈➢ 🥵 IMÁGENES 🥵*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verlesbianas | imagenlesbians_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}porno_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}contenido18 | 18contenido_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sideboobs | pechos_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}hentai_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pene_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ecchi_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pussy_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}boobs_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}panties_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}yaoi_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}yuri_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pack_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pack2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pack3_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}loli2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}muslos_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}muslitos_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}booty_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}culo_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}htrap | trapito_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}furro | furry_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}orgy | orgia_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwass_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwbdsm | bdsm_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwcum | cum_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwero | ero_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwfemdom | femdom_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwfoot | foot_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwglass | glass_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nsfwloli_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}xnxxsearch *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}xnxx *link de xnxx*_


*✶࿈⃟༆҈➢ 🥵 GIF-STICKERS 🥵*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornogif_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}porno2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nekogif_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}yurigif_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}yaoigif_


*✶࿈⃟༆҈➢ 🥵 VÍDEOS 🥵*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}video_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornovideo | pornovid_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornovidgay | pornogayv_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornolesbivid | pornolesbiv_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornobisexualvid | pornobiv_


*✶࿈⃟༆҈➢ 🥵 PREMIUM 🥵"

*✦҈͜͡➳ Usar bajo su responsabilidad* 
*✦҈͜͡➳ Vídeos +18 aleatorios*
*✦҈͜͡➳ Puede tardar en enviar*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pornopremium_
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
