//let vn = './media/mariana.mp3'
//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO
let handler = async (m, { conn, command, text, usedPrefix }) => {
let fetch = require('node-fetch')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let pp = 'https://i.imgur.com/BfsbCOR.jpg'
let menu =`
*https://ʙᴍ-ʙȯᴛ.com.ar*

*🙋🏻‍♂️🙋🏼‍♀️ HOLA ${username}*
*BIENVENIDO/A AL MENÚ COMPLETO DE...*
        *💎𝙱𝙼-𝙱𝙾𝚃💎*

*✶࿈⃟༆҈➢ 𝙼𝙸𝚂 𝙲𝚁𝙴𝙰𝙳𝙾𝚁𝙴𝚂:*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
 *🌟⊰⍣⃝ꗮ֠͜⟢ 💎⃟ꦿ𝐌𝐀𝐊𝐀𝐁𝐑𝐎•[🇦🇷]*
 *🌟⊰⍣⃝ꗮ֠͜⟢ 🎀⃟᮪〭۬̇〬⃟˖ꪶ𝓑𝓡𝓔𝓔𝓜𔒋᭄[🇦🇷]*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✶࿈⃟༆҈➢ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂:*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
  *✶࿈⃟༆҈➢ 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}donar_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}creditos_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}infobot_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}grupos_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reglas_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menuaudios_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menu2_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}estado_*
𖥨ํ∘̥⃟⸽⃟💎 _¿Qué es un Bot?_*
𖥨ํ∘̥⃟⸽⃟💎 _Codigos para audios_*
𖥨ํ∘̥⃟⸽⃟💎 _Términos y condiciones_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙾𝚆𝙽𝙴𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}owner_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}contacto_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝚃𝙾𝙿𝚂/𝚁𝙰𝙽𝙺𝙸𝙽𝙶𝚂:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10gays | topgay_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toplind@s | toplind@_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}topput@s | toppt_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toppajer@s | toppajeros_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}topotakus | toptakus_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10integrantes_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10shiposters | topshipost_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10panafrescos_*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}top10lagrasa | top10grasa_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾𝚂:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}math | mates | matemáticas *modo*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ttt | tictactoe *nombre del la sala*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}delttt *nombre del la sala*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay2 *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay2 *yo*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}gay *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lesbi *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pajero *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pajera *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}puta *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}puto *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}rata *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}manco *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}manca *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}formarpareja | pareja5_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dado_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simsimi | simi | bot *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}formartrio_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}love *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}amigorandom | amigo | amistad_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slot *cantidad*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ppt *piedra / papel / tijera*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}prostituta *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}prostituto *@tag / nombre*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}doxxear *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}doxxeame_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙷𝙰𝙱𝙻𝙰 𝙲𝙾𝙽 𝙱𝙼-𝙱𝙾𝚃*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}siri *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simi *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}alexa *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bixby *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cortana *texto*_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}imagen | image | gimage *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytsearch *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlaudio *link yt*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}dlvid *link yt*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp3 *link yt*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytmp4 *link yt*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play *titulo del audio*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.1 *titulo del audio*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play.2 *titulo del video*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play2 *titulo del video*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play3 *titulo del audio/video*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}play6 *artista y titulo*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}letra *nombredelacanción*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}google *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}googlef *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterestvideo | pintvid *link*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktokaudio *link del tiktok*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok | tiktokdl *link*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tiktok2 | Tiktok2 *link del tiktok*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}acortar | reducir *link*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pinterest | pinterest2 *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ssweb | capturar | captura *link*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}animeinfo *nombre del anime*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpanime | fondoanime_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}verinstagram | verig |igver *usuario*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ighistorias|historiasig *usuario*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}twittervideo | twvid *link de twitter*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wikipedia | wiki | internet *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}spotify | spotimusica *autor, cancion*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}frase *escriba un número (1 - 99)*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wpaesthetic | fondoaesthetic_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙶𝙴𝚂𝚃𝙸𝙾𝙽𝙰𝚁 𝙶𝚁𝚄𝙿𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}admins *texto*_ 
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}añadir *numero*_ (desactivado)
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sacar @tag_ (desactivado)
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}save *@tag + nombre de contacto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}daradmin | darpoder *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}quitaradmin | quitarpoder *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}grupo *abierto / cerrado*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable welcome_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable welcome_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable antilink_ *(WhatsApp)*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable antilink_ 
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable antilink2_ *(https:)*
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable antilink2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable delete_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable  delete_ 
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}link_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}notificar | hidetag *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setname *Nuevo nombre del grupo*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setdesc *Nueva descripción grupo*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}infogrupo_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}invocar *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}del *responder a un mensaje del bot*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fantasmas_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banchat_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unbanchat_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙼𝙴𝙽𝚄 𝙲𝚁𝙴𝙰𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}s_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sticker_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}semoji | emoji_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}emojimix 🐱+😼_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wasted_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stonks_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}trash *Responda a una foto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}sgay *Responda a una foto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}circle *Responda a una foto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickermaker_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}attp2 | s1 | sa *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}stickerfilter | cs2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tomp3 | mp3 *responde a un video*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}toimg | img *responde a un sticker*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}togif | gif *responde a sticker/video*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}ytcomentario | ytcomentar *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blur *responde a una imagen*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}jaal *Responda a una foto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}swm *imagen | video | gif*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovideo *responde a una nota de voz*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}wanted *Responda a una foto*_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙴𝚂𝚃𝙸𝙻𝙾𝚂 𝙳𝙴 𝚃𝙴𝚇𝚃𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}style *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}estilo *texto*_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝚂𝚄𝙱𝙸𝚁 𝙴𝚂𝚃𝙰𝙳𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳ Sube estados a la cuenta de 𝙱𝙼-𝙱𝙾𝚃*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / video|imagen*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}subirestado *texto / gif*_


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
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pat_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}itachi_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slap_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}pasticker_
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
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}experiencia | exp


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +18*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳ Usalos sólo si el grupo te lo permite*
*✦҈͜͡➳ NO nos hacemos responsables*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}labiblia_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳ Etiqueta un audio o nota de voz*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bass_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}deep_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}earrape_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fast_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fat_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nightcore_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}reverse_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}robot_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}slow_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tupai
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}smooth_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}blown_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}vibracion *cantidad*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tovn *audio a nota de voz*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menu04_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menuaudio_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}menuaudios_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙰𝙻𝙼𝙰𝙲𝙴𝙽𝙰𝙼𝙸𝙴𝙼𝚃𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}caja_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}almacen_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cjalmacen_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳Escribe con alguien de forma anónima!* 

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}chatanonimo | anonimochat_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}anonimoch_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}start_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}next_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}leave_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cementerio | logocementerio_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}cesped | logocesped_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}coffe | logocoffe_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}fire | logofire_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}flaming | logoflaming_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lovemessages | lovemensajes_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}playa | logoplaya_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logorandom_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}romanticdouble | romantico2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}romanticmessages | romanticms_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logosky_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}taza | logotaza_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}taza2 | logotaza2_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}technology | tecnologia_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}coff_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lolice_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simpcard_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}hornycard_ 
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lblackpink_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logocorazon_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}tahta *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nulis | notas *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}nulis2 | notas2 *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}lolice *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}simpcard *@tag*_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}logos_ *(lista)*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴𝙻 𝙾𝚆𝙽𝙴𝚁*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}boost | acelerar_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}restart_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banlist_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}virtext1 | traba1_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}actualizar | update_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bc *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setbye *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}banuser *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *public*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *public*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}unbanuser *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}listgroup_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *restrict*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}setwelcome *@tag*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}enable *autoread*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}disable *autoread*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcbot *texto*_
𖥨ํ∘̥⃟⸽⃟💎 _${usedPrefix}bcgc *texto*_

⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
✦━━━━⊰⋆⋆⟬ۜ💎𝐁𝐌-𝐁𝐎𝐓💎⟭ۜۜ⋆⋆⊱━━━━✦
`.trim(), menu, '🔱𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙲𝙸𝙿𝙰𝙻🔱', `#menu`, '🔱𝙼𝙴𝙽𝚄-02🔱', `#menu02`, '🔱𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂🔱️', `#gruposofc`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(menu01|memu01|menucompleto|memucompleto)$/i
module.exports = handler
