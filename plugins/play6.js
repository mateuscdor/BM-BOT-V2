let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw `*Formato de uso: ${usedPrefix + command} Nombre de la canciΓ³n o video*\n*Ejemplo:*\n*${usedPrefix + command} Billie Eilish bored*`
let res = await fetch("https://api-alc.herokuapp.com/api/download/play-mp4?query="+text+"&apikey=ConfuMods")
let json = await res.json()
conn.sendFile(m.chat, json.link, 'error.mp4', `*Β‘Aqui tienes el video!*\nβ±ππ«πππ¦ βΜ€Φβ₯Φβ Μ€πππ€πππ«π¨β°`, m)}
handler.command = /^(play6)$/i
module.exports = handler
