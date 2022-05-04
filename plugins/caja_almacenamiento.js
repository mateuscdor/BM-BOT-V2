let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './Caja.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
//    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `*https://ʙᴍ-ʙȯᴛ.com.ar*

*✶࿈⃟༆҈➢ 🙋🏼‍♀️🙋🏻‍♂️ BIENVENIDO ${username}*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ ALMECENAMIENTO*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳ Te presentamos la Caja de Almacenamiento!* 
En donde podrás guardar mensajes/archivos multimedia. Para luego verlos con un comando personalizado.

*✶࿈⃟༆҈➢ AGREGAR A LA LISTA* 
*Ejemplo:* ${usedPrefix}agregarmsg comando1

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregarmsg *comando/palabra clave* (responde a un texto)_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregarvn *comando/palabra clave* (responde a una nota de voz)_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregarvideo *comando/palabra clave* (responde a un video)_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregaraudio *comando/palabra clave* (responde a un audio)_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregarimg *comando/palabra clave* (responde a una imagen)_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}agregarsticker *comando/palabra clave* (responde a un sticker)_

*✦҈͜͡➳ NOTA:* tiene que responder al mensaje/archivo multimedia para ser agregado.


*✶࿈⃟༆҈➢ LISTAS DE COMANDOS*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listamsg_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listavn_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listavideo_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listaaudio_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listaimg_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listasticker_


*✶࿈⃟༆҈➢ VER TEXTOS O ARCHIVOS*

*✦҈͜͡➳ Para ver el contenido del comando personalizado:*
*Ejemplo:* ${usedPrefix}vermsg comando1

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vermsg *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vervn *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vervideo *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}veraudio *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verimg *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}versticker *comando/palabra clave*_


*✶࿈⃟༆҈➢ ELIMINAR COMANDO/PALABRA*

*✦҈͜͡➳ Para eliminar el comando personalizado:*
*Ejemplo:* ${usedPrefix}eliminarmsg comando1

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminarmsg *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminarvn *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminarvideo *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminaraudio *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminarimg *comando/palabra clave*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}eliminarsticker *comando/palabra clave*_

              *「 💎𝐁𝐌-𝐁𝐎𝐓💎 」*
              
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menusimple']
handler.tags = ['General']
handler.command = /^(menu12|memu12|caja|Caja|almacen|Almacen|almacenamiento|cjalmacen|cajaalmacenamiento|cajalmacenamiento|menucaja|menualmacen|Menucaja|Menualmacen)$/i
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
