let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =` 
╭━〘 🐈⚡️🐈⚡️🐈⚡️🐈⚡️🐈 〙━╮
 ‖ ֎┉┉┉⊰ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ⊱┉┉┉֍
 ‖ 💖 *¡𝗛ola! ${username}* 💖
 ‖    ֎┉┉┉┉┉┉⊰ 🌟 ⊱┉┉┉┉┉┉┉֍
 ‖
 ‖⇛ 🎳 _${usedPrefix}top10gays | topgay_
 ‖⇛ 🎳 _${usedPrefix}toplind@s | toplind@_
 ‖⇛ 🎳 _${usedPrefix}topput@s | toppt_
 ‖⇛ 🎳 _${usedPrefix}toppajer@s | toppajeros_
 ‖⇛ 🎳 _${usedPrefix}topotakus | toptakus_
 ‖⇛ 🎳 _${usedPrefix}top10integrantes_
 ‖⇛ 🎳 _${usedPrefix}top10shiposters | topshipost_
 ‖⇛ 🎳 _${usedPrefix}top10panafrescos_
 ‖⇛ 🎳 _${usedPrefix}top10lagrasa | top10grasa_
𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⁖ᯓ፨҈༺ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ༻፨҈ᯓ⁖
`.trim(), menu, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, '🎨 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘾𝙍𝙀𝘼𝘾𝙄𝙊𝙉 🎨', `#menucreador`, m, false, { contextInfo: { mentionedJid }})}

handler.command = /^(menu14|memu14|menutop|memutop|menutops|memutops)$/i
module.exports = handler