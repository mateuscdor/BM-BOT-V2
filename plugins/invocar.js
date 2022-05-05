let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })
    }
    const isGroup = m.chat.endsWith('@g.us')
    let grupmeta = await conn.groupMetadata(m.chat)
    const groupMembers = isGroup ? grupmeta.participants : ''
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
    const info = await conn.groupMetadata(m.chat)
    let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
    let pesan = args.join` `
    let oi = `*MENSAJE:* ${pesan}`
    let hmm = `*✶⊶⊷⊶⊷⊱𝐁𝐌-𝐁𝐎𝐓⊰⊶⊷⊶⊷✶*\n     *💎⸙ mención grupal ⸙💎*\n*✶⊶⊷⊶⊷⊱𝐁𝐌-𝐁𝐎𝐓⊰⊶⊷⊶⊷✶*\n\n
    let duh = `\n\n*✶⊶⊷⊶⊷⊱𝐁𝐌-𝐁𝐎𝐓⊰⊶⊷⊶⊷✶*\n     *💎⸙ mención grupal ⸙💎*\n*✶⊶⊷⊶⊷⊱𝐁𝐌-𝐁𝐎𝐓⊰⊶⊷⊶⊷✶*\n\n*              ⊱𝐁𝐫𝐞𝐞𝐦 ⋆̤֟♥֟⋆ ̤𝐌𝐚𝐤𝐚𝐛𝐫𝐨⊰`
       var teks = `${oi}\n\n📌\n`
    for (let admon of groupMembers) {
        teks += ` ✦҈͜͡➳ @${admon.jid.split('@')[0]}\n`
    }
    mentions(hmm+teks+duh, users, true,{ contextInfo: { mentionedJid: users } })
    // m.reply( + "\nNama:\n" +  + "\nDeskripsi:\n" + )
} 
handler.help = ['invocar'] 
handler.tags = ['group']
handler.command = /^invocar|imvocar|imbocar$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false
handler.register = false

handler.fail = null
handler.limit = false
module.exports = handler
