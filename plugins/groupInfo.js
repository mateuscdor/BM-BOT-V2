let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/wa.jpg'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, antivirtex, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.DATABASE.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 🔱 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🔱 」*\n
*𖥨ํ∘̥⃟⸽⃟💎 ID De Registro En El Bot:* 
${groupMetadata.id}

*𖥨ํ∘̥⃟⸽⃟💎 Nombre:* 
${groupMetadata.subject}

*𖥨ํ∘̥⃟⸽⃟💎 Descripcion:* 
${groupMetadata.desc}

*𖥨ํ∘̥⃟⸽⃟💎 Creador/a Del Grupo:* 
@${m.chat.split`-`[0]}

*𖥨ํ∘̥⃟⸽⃟💎 Admins Del Grupo:*
${listAdmin}

*𖥨ํ∘̥⃟⸽⃟💎 Total De Participantes:*
${participants.length} Participantes

*𖥨ํ∘̥⃟⸽⃟💎 Configuraciones Del Grupo:*
${welcome ? '✅' : '❌'} Welcome
${global.DATABASE.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogroup|gc|infogrupo)$/i

handler.group = true

module.exports = handler
