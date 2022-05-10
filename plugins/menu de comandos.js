//NO MODIFIQUES EL NÚMERO DE LA CREADORA NI EL NOMBRE.. SOLO AGREGA LA INFORMACIÓN QUE TU QUIERAS O EDITALO A TU MANERA PERO DEJANDO LOS CREDITOS
//PUEDES AGREGAR OTRA FILAS DE PAYPAL, GRUPOS, PERO DEJA ALGUNOS CREDITOS, YA QUE ES LA UNICA MANERA DE INGRESOS DEL BOT

//SI VAS A MODIFICAR TODO Y HACER PASAR COMO SI FUERA TU BOT (CREADO POR TI) SOLO TE PIDO QUE SI ESTA EN TUS POSIBILIDADES DONES UN POCO

//BASE UTILIZADA - GAMES-WABOT
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {
let vn = './media/bot.mp3'
  let pp = './Bot.jpg'
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

✶࿈⃟༆҈➢ 🙋🏻‍♂️🙋🏼‍♀️ HOLA *${username}*
BIENVENIDO/A AL MENÚ COMPLETO DE
                    *💎𝐁𝐌-𝐁𝐎𝐓💎*

*✶࿈⃟༆҈➢ 𝙼𝙸𝚂 𝙲𝚁𝙴𝙰𝙳𝙾𝚁𝙴𝚂:*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*🌟⊰⍣⃝ꗮ֠͜⟢ 💎⃟ꦿ𝐌𝐀𝐊𝐀𝐁𝐑𝐎•[🇦🇷]*
*🌟⊰⍣⃝ꗮ֠͜⟢  🎀⃟᮪〭۬̇〬⃟˖ꪶ𝓑𝓡𝓔𝓔𝓜𔒋᭄[🇦🇷]*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✶࿈⃟༆҈➢ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂:*

*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}donar
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}creditos
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}infobot
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}grupos
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reglas
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menuaudios
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menu2
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}estado
𖥨ํ∘̥⃟⸽⃟💎 Qué es un Bot?
𖥨ํ∘̥⃟⸽⃟💎 Codigos para audios
𖥨ํ∘̥⃟⸽⃟💎 Términos y condiciones


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙾𝚆𝙽𝙴𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}owner
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}contacto


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝚃𝙾𝙿𝚂 | 𝚁𝙰𝙽𝙺𝙸𝙽𝙶*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}top10gays | topgay
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}toplind@s | toplind@
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}topput@s | toppt
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}toppajer@s | toppajeros
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}topotakus | toptakus
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}top10integrantes
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}top10shiposters | topshipost
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}top10panafrescos
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}top10lagrasa | top10grasa


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙹𝚄𝙴𝙶𝙾𝚂:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}math | mates | matemáticas *_modo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ttt | tictactoe *_nombre del la sala_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}delttt *_nombre del la sala_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay2 _@tag_
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay2 *_yo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gay *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lesbi *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pajero *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pajera *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}puta *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}puto *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}rata *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}manco *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}manca *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}formarpareja | pareja5
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dado
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simsimi | simi | bot *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}formartrio
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}love *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}amigorandom | amigo | amistad
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}slot *_cantidad_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ppt *_piedra / papel / tijera_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}prostituta *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}prostituto *_@tag / nombre_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}doxxear *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}doxxeame


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙷𝙰𝙱𝙻𝙰 𝙲𝙽 𝙱𝙼-𝙱𝙾𝚃*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}siri *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simi *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}alexa *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bixby *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cortana *_texto_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙼𝙴𝙽𝚄 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}imagen | image | gimage *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytsearch *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dlaudio *_link yt_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}dlvid *_link yt_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytmp3 *_link yt_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytmp4 *_link yt_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play *_titulo del audio_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play.1 *_titulo del audio_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play.2 *_titulo del video_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play2 *_titulo del video_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play3 *_titulo del audio/video_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}play6 *_artista y titulo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}letra *_nombredelacanción_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}google *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}googlef *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pinterestvideo | pintvid *_link_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktokaudio *_link del tiktok_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktok | tiktokdl *_link_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tiktok2 | Tiktok2 *_link del tiktok_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}acortar | reducir *_link_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}pinterest | pinterest2 *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ssweb | capturar | captura *_link_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}animeinfo *_nombre del anime_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpanime | fondoanime_
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}verinstagram | verig |igver *usuario*_
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ighistorias|historiasig *_usuario_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}twittervideo | twvid *_link de twitter_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wikipedia | wiki | internet *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spotify | spotimusica *_autor, cancion_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}frase *_escriba un número (1 - 99)_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wpaesthetic | fondoaesthetic_


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙶𝙴𝚂𝚃𝙸𝙾𝙽𝙰𝚁 𝙶𝚁𝚄𝙿𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}admins *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}añadir *_numero_* (desactivado)
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sacar _@tag_ (desactivado)
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}save *_@tag + nombre de contacto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}daradmin | darpoder _@tag_
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}quitaradmin | quitarpoder _@tag_
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}grupo abierto / cerrado
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable welcome
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable welcome
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable antilink *_(WhatsApp)_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable antilink
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable antilink2 *_(https:)_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable antilink2
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable delete
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable  delete
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}link
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}notificar | hidetag *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setname *_Nuevo nombre del grupo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setdesc *_Nueva descripción grupo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}infogrupo
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}invocar *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}del *_responde un mensaje del bot_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fantasmas
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banchat
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}unbanchat


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙼𝙴𝙽𝚄 𝙲𝚁𝙴𝙰𝚁:*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}s
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sticker
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}semoji | emoji
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}emojimix 🐱+😼
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wasted
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stonks
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}trash *_Responda a una foto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}sgay *_Responda a una foto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}circle *_Responda a una foto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stickermaker
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}attp *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}attp2 | s1 | sa *_texto_"
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}stickerfilter | cs2
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tomp3 | mp3 *_responde a un video_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}toimg | img *_responde a un sticker_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}togif | gif *_responde a sticker/video_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}ytcomentario | ytcomentar *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}blur *_responde a una imagen_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}jaal *_Responda a una foto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}swm *_imagen | video | gif_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tovideo *_responde a una nota de voz_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}wanted *_Responda a una foto_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙴𝚂𝚃𝙸𝙻𝙾𝚂 𝙳𝙴 𝚃𝙴𝚇𝚃𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}style *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}estilo *_texto_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝚂𝚄𝙱𝙸𝚁 𝙴𝚂𝚃𝙰𝙳𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

*✦҈͜͡➳ Sube estados a la cuenta de 𝙱𝙼-𝙱𝙾𝚃*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}subirestado *_texto / video|imagen_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}subirestado *_texto / gif_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝚁𝙰𝙽𝙳𝙾𝙼 | 𝙰𝙽𝙸𝙼𝙴*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}pubg
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}doraemon
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}jeni
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}jisoo
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}rose
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}wpmontaña | fondomontaña
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}wpgaming | fondogaming
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}randomwallpaper
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}compartirfoto
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}futbol
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}Messi
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}animal
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}meme
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}meme2
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}meme3
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}cat | gato | gata
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}dog | perro | perra
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}pikachu
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}waifu
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}blackpink
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}reto
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}verdad
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}imagenrandom | random | epico
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}neko
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}lolivid
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}iqtest | iq | inteligencia
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}kpopitzy
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}navidad
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}loli
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}gawrgura
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}miku
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nyan
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}pat
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}itachi
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}slap
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}pasticker
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}perfil
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}scan | datos | escaneo
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}kpop
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}qr *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}afk | aviso | informo *_motivo_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}CristianoRonaldo
𖥨ํ∘̥⃟⸽⃟💎 $usedPrefix}pregunta *_pregunta_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}mention | mensaje *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spamchat *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}traducir es *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}zodiac | zodiaco *_AAAA MM DD_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}readmore | leermas *_texto1| texto2_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}calc | calculadora *_expresión mat_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spamwa *_numero|texto|cantidad_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}readqr *_responde a un código QR_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}anime *_random / waifu / husbu /neko_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}agendar *_@tag + nombre contacto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}guardar *_@tag + nombre contacto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spam *_numero|texto|cantidad_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}spoiler | hidetext *_texto1| texto2_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}experiencia | exp


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢  𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +18*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

✦҈͜͡➳ Usalos sólo si el grupo te lo permite
✦҈͜͡➳ NO nos hacemos responsables

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}labiblia


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

✦҈͜͡➳ Etiqueta un audio o nota de voz*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bass
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}deep
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}earrape
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fast
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fat
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nightcore
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}reverse
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}robot
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}slow
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tupai
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}smooth
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}blown
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}vibracion *_cantidad_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tovn *_audio a nota de voz_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menu04
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menuaudio
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}menuaudios


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙰𝙻𝙼𝙰𝙲𝙴𝙽𝙰𝙼𝙸𝙴𝙼𝚃𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}caja
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}almacen
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cjalmacen


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

✦҈͜͡➳Escribe con alguien de forma anónima!

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}chatanonimo | anonimochat
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}anonimoch
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}start
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}next
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}leave


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cementerio | logocementerio
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}cesped | logocesped
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}coffe | logocoffe
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}fire | logofire
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}flaming | logoflaming
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lovemessages | lovemensajes
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}playa | logoplaya
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logorandom
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}romanticdouble | romantico2
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}romanticmessages | romanticms
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logosky
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}taza | logotaza
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}taza2 | logotaza2
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}technology | tecnologia
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}coff
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lolice
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simpcard
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}hornycard
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lblackpink
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logocorazon
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}tahta *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nulis | notas *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}nulis2 | notas2 *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}lolice *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}simpcard *_@tag_"


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙻𝙾𝙶𝙾𝚂*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}logos *_(lista)_*


*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*
*✶࿈⃟༆҈➢ 𝙼𝙴𝙽𝚄 𝙳𝙴𝙻 𝙾𝚆𝙽𝙴𝚁*
*✶▉͟͟͞========𖠷𖣥𖠷======== ͟͟͞▉✶*

𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}boost | acelerar
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}restart
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banlist
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}virtext1 | traba1
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}actualizar | update
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bc *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcgc *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcbot *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setbye *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}banuser *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_public_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable *_public_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}unbanuser *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}listgroup
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_restrict_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_autoread_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}setwelcome *_@tag_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}enable *_autoread_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}disable *_autoread_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcbot *_texto_*
𖥨ํ∘̥⃟⸽⃟💎 ${usedPrefix}bcgc *_texto_*

✦━━━━⊰⋆⋆⟬💎𝐁𝐌-𝐁𝐎𝐓💎⟭⋆⋆⊱━━━━✦
⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menu']
handler.tags = ['General']
handler.command = /^(menu01|memu01|menucompleto|memucompleto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

