let { MessageType } = require('@adiwajshing/baileys')
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new global.conn.constructor()
    conn.version = global.conn.version
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', '💎𝐁𝐌-𝐁𝐎𝐓💎\n 𝙎𝙪𝙗-𝐁𝐌-𝐁𝐎𝐓\n\n*𖥨ํ∘̥⃟⸽⃟💎 Con otro celular o en la PC escanea este QR para convertirte en un sub bot*\n\n*𖥨ํ∘̥⃟⸽⃟💎 Haga clic en los tres puntos en la esquina superior derecha*\n*𖥨ํ∘̥⃟⸽⃟💎 Toca WhatsApp Web*\n*𖥨ํ∘̥⃟⸽⃟💎 Escanee este codigo QR*\n*¡Este código QR expira en 20 segundos!*\n\n*𖥨ํ∘̥⃟⸽⃟💎 No nos hacemos responsable del mal uso que se le puedas dar o si el numero se manda a soporte. Tampoco somos responsables de que su número pueda ser añadido en otros grupos, o su número pueda ser público. Al ser Sub Bot no tenemos control sobre usted. Tienen el deber se seguir al pie de la letra los terminos y condiciones y privacidad Escribe "Términos y condiciones" Gracias*', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.welcome = global.conn.welcome + ''
    conn.bye = global.conn.bye + ''
    conn.spromote = global.conn.spromote + ''
    conn.sdemote = global.conn.sdemote + ''
    conn.handler = global.conn.handler.bind(conn)
    conn.onDelete = global.conn.onDelete.bind(conn)
    conn.onParticipantsUpdate = global.conn.onParticipantsUpdate.bind(conn)
    conn.on('chat-update', conn.handler)
    conn.on('message-delete', conn.onDelete)
    conn.on('group-participants-update', conn.onParticipantsUpdate)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      parent.reply(m.chat, '*𖥨ํ∘̥⃟⸽⃟💎 Conectado exitosamente con WhatsApp*\n*Nota: Esto es temporal*\n*BM-BOT se reinicia constantemente, tal que todos los sub bots tambien lo haran*\n\n' + JSON.stringify(user, null, 2), m)
      if (auth) return
      await parent.sendMessage(user.jid, `*Inicia sesión sin el codigo QR con el siguiente mensaje, envialo para reconectar con GataBot y/o diga conexion perdida...*\n\n*Puede obtener nuevamente este código QR con col comando #getcode, debe se seguir siendo sub bot para poder recibirlo*`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      let i = global.conns.indexOf(conn)
      if (i < 0) return
      delete global.conns[i]
      global.conns.splice(i, 1)
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `*𖥨ํ∘̥⃟⸽⃟💎 Conexión perdida... envie el mensaje que se envio cuando se hizo Sub Bot. El mensaje era #serBMbot (un codigo de texto)*`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else throw '*https://ʙᴍ-ʙȯᴛ.com.ar*\n\n*「 💎𝐁𝐌-𝐁𝐎𝐓💎 」*\n\n*𖥨ํ∘̥⃟⸽⃟💎 No se puede hacer un bot dentro de un sub bot!*\n*𖥨ํ∘̥⃟⸽⃟💎 Use el comando #BMjadibot al numero oficial/principal de BM-BOT*\n\n*👉 https://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=#BMjadibot*\n\n*「 💎𝐁𝐌-𝐁𝐎𝐓💎 」*'
}
handler.help = ['jadibot']
handler.tags = ['jadibot']

handler.command = /^serBMbot|BMjadibot$/i
handler.prems = false
handler.private = false

handler.limit = false

module.exports = handler
