let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hey...hola!! ๐๐ป Te invito a unirte a nuestros grupos de WhatsApp para pasar un buen rato, hacer amigos, y quien sabe...hasta podrรญas conocer a tu media sandia ๐*

*โถเฟโเผาโขNUESTROS GRUPOS:*

*1) โฅออก๐๐ณ๐๐๐๐โฅ๏ธ๐ด๐๐๐๐๐๐์ ๐์๐ฉ๐๐๐๐*
*.-https://chat.whatsapp.com/Lg2fxOkJjjwA6RaJHSyp7T*

*2) โฅ๏ธโจ7๐7เผ๐ฌ๐๐๐แทฉ๐อฌ๐อคอค๐อค๐อซโจโฅ๏ธ*
*.-https://chat.whatsapp.com/F01izyuXd9nCW8rKdgSiQh*

*3) โฏ๐๐ฐ๐๐๐๐๐๐โค๏ธ๐พ๐๐๐๐๐๐๐๐โฏ*
*.-https://chat.whatsapp.com/I2sn5hZcioZGMUP9wLhmum*

*4) ๐ซ๐๐ธ๐๐๐๐๐๐ โฅ๏ธ๐๐๐๐๐๐๐๐๐ก๐๐ซ๐*
*.-https://chat.whatsapp.com/CouHW58xVeeI9a2UHmlwZZ*

*5) ๐อโโเตขแญ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด๐ ๐ ๐ฟ๐ด๐ป๐ธฬ๐ฒ๐๐ป๐ฐ๐โโเตขแญอ๐*
*.-https://chat.whatsapp.com/CViICouF14MCcpiRFBAm5l*

*6) ๐อโโเตขแญ๐ป๐ธ๐ฝ๐บ๐ ๐ ๐อจ๐อช๐ธอฃ๐ฒอญ๐บ๐ด๐๐โโเตขแญอ๐*
*.-https://chat.whatsapp.com/GkeP7U13SLMA2moZmRqtYd*

*7) ๐อโโเตขแญ๐ป๐ธ๐ฝ๐บ๐โง๐ฐ๐ผ๐ธ๐๐๐ฐ๐ณโง๐น๐พ๐ณ๐ฐโโเตขแญอ๐*
*.-https://chat.whatsapp.com/H18N0f8seDsBdOyAuweUIT*`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '๐๐๐-๐๐๐๐', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
