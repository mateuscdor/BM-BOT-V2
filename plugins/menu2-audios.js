let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Bot.jpg'
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
✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳Escriba las frases tal como están*

𖥨ํ∘̥⃟⸽⃟💎 Noche de paz
𖥨ํ∘̥⃟⸽⃟💎 Buenos dias
𖥨ํ∘̥⃟⸽⃟💎 Audio hentai
𖥨ํ∘̥⃟⸽⃟💎 Fiesta del admin
𖥨ํ∘̥⃟⸽⃟💎 Fiesta del admin 2
𖥨ํ∘̥⃟⸽⃟💎 Viernes
𖥨ํ∘̥⃟⸽⃟💎 Me olvidé
𖥨ํ∘̥⃟⸽⃟💎 Baneado
𖥨ํ∘̥⃟⸽⃟💎 Feliz navidad
𖥨ํ∘̥⃟⸽⃟💎 A nadie le importa
𖥨ํ∘̥⃟⸽⃟💎 Sexo
𖥨ํ∘̥⃟⸽⃟💎 Vete a la vrg
𖥨ํ∘̥⃟⸽⃟💎 Ara ara
𖥨ํ∘̥⃟⸽⃟💎 Hola
𖥨ํ∘̥⃟⸽⃟💎 Un pato
𖥨ํ∘̥⃟⸽⃟💎 Nyanpasu
𖥨ํ∘̥⃟⸽⃟💎 Te amo
𖥨ํ∘̥⃟⸽⃟💎 Yamete
𖥨ํ∘̥⃟⸽⃟💎 Te diagnostico con gay
𖥨ํ∘̥⃟⸽⃟💎 Quien es tu sempai botsito 7w7
𖥨ํ∘̥⃟⸽⃟💎 Bañate
𖥨ํ∘̥⃟⸽⃟💎 Vivan los novios
𖥨ํ∘̥⃟⸽⃟💎 Marica quien
𖥨ํ∘̥⃟⸽⃟💎 Es puto
𖥨ํ∘̥⃟⸽⃟💎 La biblia
𖥨ํ∘̥⃟⸽⃟💎 Onichan
𖥨ํ∘̥⃟⸽⃟💎 Bot puto
𖥨ํ∘̥⃟⸽⃟💎 Feliz cumpleaños
𖥨ํ∘̥⃟⸽⃟💎 Shadow Bot
𖥨ํ∘̥⃟⸽⃟💎 Pasa pack Bot
𖥨ํ∘̥⃟⸽⃟💎 Atencion grupo
𖥨ํ∘̥⃟⸽⃟💎 Homero chino
𖥨ํ∘̥⃟⸽⃟💎 Oh me vengo
𖥨ํ∘̥⃟⸽⃟💎 Murio el grupo
𖥨ํ∘̥⃟⸽⃟💎 Siuuu
𖥨ํ∘̥⃟⸽⃟💎 Rawr
𖥨ํ∘̥⃟⸽⃟💎 UwU
𖥨ํ∘̥⃟⸽⃟💎 :c
𖥨ํ∘̥⃟⸽⃟💎 a
𖥨ํ∘̥⃟⸽⃟💎 Hey
𖥨ํ∘̥⃟⸽⃟💎 Enojado
𖥨ํ∘̥⃟⸽⃟💎 Enojada
𖥨ํ∘̥⃟⸽⃟💎 Chao
𖥨ํ∘̥⃟⸽⃟💎 Hentai
𖥨ํ∘̥⃟⸽⃟💎 Triste
𖥨ํ∘̥⃟⸽⃟💎 Estoy triste
𖥨ํ∘̥⃟⸽⃟💎 Me pican los cocos
𖥨ํ∘̥⃟⸽⃟💎 Contexto
𖥨ํ∘̥⃟⸽⃟💎 Me voy
𖥨ํ∘̥⃟⸽⃟💎 Tengo los calzones del admin
𖥨ํ∘̥⃟⸽⃟💎 Entrada épica
𖥨ํ∘̥⃟⸽⃟💎 Esto va ser épico papus
𖥨ํ∘̥⃟⸽⃟💎 Ingresa épicamente
𖥨ํ∘̥⃟⸽⃟💎 Bv
𖥨ํ∘̥⃟⸽⃟💎 Yoshi
𖥨ํ∘̥⃟⸽⃟💎 No digas eso papu
𖥨ํ∘̥⃟⸽⃟💎 Ma ma masivo
𖥨ํ∘̥⃟⸽⃟💎 Masivo
𖥨ํ∘̥⃟⸽⃟💎 Basado
𖥨ํ∘̥⃟⸽⃟💎 Basada
𖥨ํ∘̥⃟⸽⃟💎 Fino señores
𖥨ํ∘̥⃟⸽⃟💎 Verdad que te engañ
𖥨ํ∘̥⃟⸽⃟💎 Sus
𖥨ํ∘̥⃟⸽⃟💎 Ohayo
𖥨ํ∘̥⃟⸽⃟💎 La voz de hombre
𖥨ํ∘̥⃟⸽⃟💎 Pero esto
𖥨ํ∘̥⃟⸽⃟💎 Bien pensado Woody
𖥨ํ∘̥⃟⸽⃟💎 Jesucristo
𖥨ํ∘̥⃟⸽⃟💎 Wtf
𖥨ํ∘̥⃟⸽⃟💎 Una pregunta
𖥨ํ∘̥⃟⸽⃟💎 Que sucede
𖥨ํ∘̥⃟⸽⃟💎 Hablame
𖥨ํ∘̥⃟⸽⃟💎 Pikachu
𖥨ํ∘̥⃟⸽⃟💎 Niconico
𖥨ํ∘̥⃟⸽⃟💎 Yokese
𖥨ํ∘̥⃟⸽⃟💎 Omaiga
𖥨ํ∘̥⃟⸽⃟💎 Nadie te preguntó
𖥨ํ∘̥⃟⸽⃟💎 Bueno si
𖥨ํ∘̥⃟⸽⃟💎 Usted está detenido
𖥨ํ∘̥⃟⸽⃟💎 No me hables
𖥨ํ∘̥⃟⸽⃟💎 No chu
𖥨ํ∘̥⃟⸽⃟💎 El pepe
𖥨ํ∘̥⃟⸽⃟💎 Pokémon
𖥨ํ∘̥⃟⸽⃟💎 No me hagas usar esto
𖥨ํ∘̥⃟⸽⃟💎 Esto va para ti
𖥨ํ∘̥⃟⸽⃟💎 Abduzcan
𖥨ํ∘̥⃟⸽⃟💎 Joder
𖥨ํ∘̥⃟⸽⃟💎 Hablar primos
𖥨ํ∘̥⃟⸽⃟💎 Mmm
𖥨ํ∘̥⃟⸽⃟💎 Orale

*᥀ꪶ🌹─────·ٜ⚘ٜᩦ୭─────·ٜ۬🌹･*
      *⊱𝑩𝒓𝒆𝒆𝒎 ⋆̤֟♥֟⋆ ̤𝑴𝒂𝒌𝒂𝒃𝒓𝒐⊰*
*᥀ꪶ🌹─────·ٜ⚘ٜᩦ୭─────·ٜ۬🌹･*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu2']
handler.tags = ['General']
handler.command = /^(menu04|Menú04|menú04|memu04|menuaudio|menuaudios|memuaudios|memuaudio|menudeaudios|memudeaudios)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
