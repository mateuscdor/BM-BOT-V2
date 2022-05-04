let fetch = require('node-fetch')
let handler = async (m, {command, conn, text}) => {
if (!text) throw `*𖥨ํ∘̥⃟⸽⃟💎 Ingrese el nombre/titulo o link para descargar la canción o vídeo de YouTube*\n\n*𖥨ํ∘̥⃟⸽⃟💎 Ejemplo*\n*✦҈͜͡➳ #play.1 Billie Eilish - Bellyache*\n*✦҈͜͡➳ #play.2 Billie Eilish - Bellyache*`
if (command == 'play.1') {
let espera = '*𖥨ํ∘̥⃟⸽⃟💎 Por favor aguarde un momento en lo que descargo y envío su audio, gracias*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
let espera = '*𖥨ํ∘̥⃟⸽⃟💎 Por favor aguarde un momento en lo que descargo y envío su vídeo, gracias*'
m.reply(espera)
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `*BM-BOT*`, m)}
}
handler.command = ['play.1', 'play.2']
module.exports = handler
