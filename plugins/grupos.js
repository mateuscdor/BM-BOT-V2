let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hey...hola!! 👋🏻 Te invito a unirte a nuestros grupos de WhatsApp para pasar un buen rato, hacer amigos, y quien sabe...hasta podrías conocer a tu media sandia 🍉*

*✶࿈⃟༆҈➢NUESTROS GRUPOS:*

*1) ❥͜͡💍𝑳𝒊𝒏𝒌𝒔♥️𝑴𝒂𝒌𝒂𝒃𝒓𝒐유💍웃𝑩𝒓𝒆𝒆𝒎*
*.-https://chat.whatsapp.com/Lg2fxOkJjjwA6RaJHSyp7T*

*2) ♥️✨7𝒘7༊𝑬𝒏𝒍𝒂ᷩ𝒄ͬ𝒆ͤͤ𝒆ͤ𝒔ͫ✨♥️*
*.-https://chat.whatsapp.com/F01izyuXd9nCW8rKdgSiQh*

*3) ↯🎀𝕰𝖓𝖑𝖆𝖈𝖊𝖘❤︎𝕾𝖙𝖎𝖈𝖐𝖊𝖗𝖘🎀↯*
*.-https://chat.whatsapp.com/I2sn5hZcioZGMUP9wLhmum*

*4) 💫💜𝐸𝑛𝑙𝑎𝑐𝑒𝑠♥︎𝑀𝑎𝑙𝑎𝑛𝑑𝑟𝑖𝑡𝑎💫💜*
*.-https://chat.whatsapp.com/CouHW58xVeeI9a2UHmlwZZ*

*5) 🍃͜❀⃔ൢ᭄𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚈 𝙿𝙴𝙻𝙸́𝙲𝚄𝙻𝙰𝚂❀⃔ൢ᭄͜🍃*
*.-https://chat.whatsapp.com/CViICouF14MCcpiRFBAm5l*

*6) 🍃͜❀⃔ൢ᭄𝙻𝙸𝙽𝙺𝚂 𝚈 𝚂ͨ𝚃ͪ𝙸ͣ𝙲ͭ𝙺𝙴𝚁𝚂❀⃔ൢ᭄͜🍃*
*.-https://chat.whatsapp.com/GkeP7U13SLMA2moZmRqtYd*

*7) 🍂͜❀⃔ൢ᭄𝙻𝙸𝙽𝙺𝚂⛧𝙰𝙼𝙸𝚂𝚃𝙰𝙳⛧𝙹𝙾𝙳𝙰❀⃔ൢ᭄͜🍂*
*.-https://chat.whatsapp.com/H18N0f8seDsBdOyAuweUIT*`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '💎𝐁𝐌-𝐁𝐎𝐓💎', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
