const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: 'โฑ๐๐ซ๐๐๐ฆ โฬคึโฅึโ ฬค๐๐๐ค๐๐๐ซ๐จโฐ'
        })
    } catch (e) {
        console.log(e)
        throw '_*El propietario no ha pagado la factura de esta funciรณn.*_'
    }
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^fondoanime|wpanime|WPANIME|WPanime$/i
handler.limit = false
module.register = false
module.group = true

module.exports = handler
