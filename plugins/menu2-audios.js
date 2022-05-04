let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Menu2.jpg'
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
*🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳Dijite las frases tal como están*

*𖥨ํ∘̥⃟⸽⃟💎 _Noche de paz_*
*𖥨ํ∘̥⃟⸽⃟💎 _Buenos dias_*
*𖥨ํ∘̥⃟⸽⃟💎 _Audio hentai_*
*𖥨ํ∘̥⃟⸽⃟💎 _Fiesta del admin_*
*𖥨ํ∘̥⃟⸽⃟💎 _Fiesta del admin 2_*
*𖥨ํ∘̥⃟⸽⃟💎 _Viernes_*
*𖥨ํ∘̥⃟⸽⃟💎 _Me olvidé_*
*𖥨ํ∘̥⃟⸽⃟💎 _Baneado_*
*𖥨ํ∘̥⃟⸽⃟💎 _Feliz navidad_*
*𖥨ํ∘̥⃟⸽⃟💎 _A nadie le importa_*
*𖥨ํ∘̥⃟⸽⃟💎 _Sexo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Vete a la vrg_*
*𖥨ํ∘̥⃟⸽⃟💎 _Ara ara_*
*𖥨ํ∘̥⃟⸽⃟💎 _Hola_*
*𖥨ํ∘̥⃟⸽⃟💎 _Un pato_*
*𖥨ํ∘̥⃟⸽⃟💎 _Nyanpasu_*
*𖥨ํ∘̥⃟⸽⃟💎 _Te amo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Yamete_*
*𖥨ํ∘̥⃟⸽⃟💎 _Te diagnostico con gay_*
*𖥨ํ∘̥⃟⸽⃟💎 _Quien es tu sempai botsito 7w7_*
*𖥨ํ∘̥⃟⸽⃟💎 _Bañate_*
*𖥨ํ∘̥⃟⸽⃟💎 _Vivan los novios_*
*𖥨ํ∘̥⃟⸽⃟💎 _Marica quien_*
*𖥨ํ∘̥⃟⸽⃟💎 _Es puto_*
*𖥨ํ∘̥⃟⸽⃟💎 _La biblia_*
*𖥨ํ∘̥⃟⸽⃟💎 _Onichan_*
*𖥨ํ∘̥⃟⸽⃟💎 _Bot puto_*
*𖥨ํ∘̥⃟⸽⃟💎 _Feliz cumpleaños_*
*𖥨ํ∘̥⃟⸽⃟💎 _Shadow Bot_*
*𖥨ํ∘̥⃟⸽⃟💎 _Pasa pack Bot_*
*𖥨ํ∘̥⃟⸽⃟💎 _Atencion grupo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Homero chino_*
*𖥨ํ∘̥⃟⸽⃟💎 _Oh me vengo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Murio el grupo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Siuuu_*
*𖥨ํ∘̥⃟⸽⃟💎 _Rawr_*
*𖥨ํ∘̥⃟⸽⃟💎 _UwU_*
*𖥨ํ∘̥⃟⸽⃟💎 _:c_*
*𖥨ํ∘̥⃟⸽⃟💎 _a_*
*𖥨ํ∘̥⃟⸽⃟💎 _Hey_*
*𖥨ํ∘̥⃟⸽⃟💎 _Enojado_*
*𖥨ํ∘̥⃟⸽⃟💎 _Enojada_*
*𖥨ํ∘̥⃟⸽⃟💎 _Chao_*
*𖥨ํ∘̥⃟⸽⃟💎 _Hentai_*
*𖥨ํ∘̥⃟⸽⃟💎 _Triste_*
*𖥨ํ∘̥⃟⸽⃟💎 _Estoy triste_*
*𖥨ํ∘̥⃟⸽⃟💎 _Me pican los cocos_*
*𖥨ํ∘̥⃟⸽⃟💎 _Contexto_*
*𖥨ํ∘̥⃟⸽⃟💎 _Me voy_*
*𖥨ํ∘̥⃟⸽⃟💎 _Tengo los calzones del admin_*
*𖥨ํ∘̥⃟⸽⃟💎 _Entrada épica_*
*𖥨ํ∘̥⃟⸽⃟💎 _Esto va ser épico papus_*
*𖥨ํ∘̥⃟⸽⃟💎 _Ingresa épicamente_*
*𖥨ํ∘̥⃟⸽⃟💎 _Bv_#
*𖥨ํ∘̥⃟⸽⃟💎 _Yoshi_*
*𖥨ํ∘̥⃟⸽⃟💎 _No digas eso papu_*
*𖥨ํ∘̥⃟⸽⃟💎 _Ma ma masivo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Masivo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Basado_*
*𖥨ํ∘̥⃟⸽⃟💎 _Basada_*
*𖥨ํ∘̥⃟⸽⃟💎 _Fino señores_*
*𖥨ํ∘̥⃟⸽⃟💎 _Verdad que te engañe_*
*𖥨ํ∘̥⃟⸽⃟💎 _Sus_*
*𖥨ํ∘̥⃟⸽⃟💎 _Ohayo_*
*𖥨ํ∘̥⃟⸽⃟💎 _La voz de hombre_*
*𖥨ํ∘̥⃟⸽⃟💎 _Pero esto_*
*𖥨ํ∘̥⃟⸽⃟💎 _Bien pensado Woody_*
*𖥨ํ∘̥⃟⸽⃟💎 _Jesucristo_*
*𖥨ํ∘̥⃟⸽⃟💎 _Wtf_*
*𖥨ํ∘̥⃟⸽⃟💎 _Una pregunta_*
*𖥨ํ∘̥⃟⸽⃟💎 _Que sucede_*
*𖥨ํ∘̥⃟⸽⃟💎 _Hablame_*
*𖥨ํ∘̥⃟⸽⃟💎 _Pikachu_*
*𖥨ํ∘̥⃟⸽⃟💎 _Niconico_*
*𖥨ํ∘̥⃟⸽⃟💎 _Yokese_*
*𖥨ํ∘̥⃟⸽⃟💎 _Omaiga_*
*𖥨ํ∘̥⃟⸽⃟💎 _Nadie te preguntó_*
*𖥨ํ∘̥⃟⸽⃟💎 _Bueno si_*
*𖥨ํ∘̥⃟⸽⃟💎 _Usted está detenido_*
*𖥨ํ∘̥⃟⸽⃟💎 _No me hables_*
*𖥨ํ∘̥⃟⸽⃟💎 _No chu_*
*𖥨ํ∘̥⃟⸽⃟💎 _El pepe_*
*𖥨ํ∘̥⃟⸽⃟💎 _Pokémon_*
*𖥨ํ∘̥⃟⸽⃟💎 _No me hagas usar esto_*
*𖥨ํ∘̥⃟⸽⃟💎 _Esto va para ti_*
*𖥨ํ∘̥⃟⸽⃟💎 _Abduzcan_*
*𖥨ํ∘̥⃟⸽⃟💎 _Joder_*
*𖥨ํ∘̥⃟⸽⃟💎 _Hablar primos_*
*𖥨ํ∘̥⃟⸽⃟💎 _Mmm_*
*𖥨ํ∘̥⃟⸽⃟💎 _Orale_*

*᥀ꪶ🌹─────·ٜ⚘ٜᩦ୭─────·ٜ۬🌹･*
      *⊱𝑩𝒓𝒆𝒆𝒎 ⋆̤֟♥֟⋆ ̤𝑴𝒂𝒌𝒂𝒃𝒓𝒐⊰*
*᥀ꪶ🌹─────·ٜ⚘ٜᩦ୭─────·ٜ۬🌹･*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu04|Menú04|menú04|memu04|menuaudio|menuaudios|memuaudios|memuaudio|)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
