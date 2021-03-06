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
        let text = `*γ π± πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ π³π΄π» πΆπππΏπΎ π± γ*\n
*π₯¨ΰΉβΜ₯ββΈ½βπ ID De Registro En El Bot:* 
${groupMetadata.id}

*π₯¨ΰΉβΜ₯ββΈ½βπ Nombre:* 
${groupMetadata.subject}

*π₯¨ΰΉβΜ₯ββΈ½βπ Descripcion:* 
${groupMetadata.desc}

*π₯¨ΰΉβΜ₯ββΈ½βπ Creador/a Del Grupo:* 
@${m.chat.split`-`[0]}

*π₯¨ΰΉβΜ₯ββΈ½βπ Admins Del Grupo:*
${listAdmin}

*π₯¨ΰΉβΜ₯ββΈ½βπ Total De Participantes:*
${participants.length} Participantes

*π₯¨ΰΉβΜ₯ββΈ½βπ Configuraciones Del Grupo:*
${welcome ? 'β' : 'β'} Welcome
${global.DATABASE.data.chats[m.chat].delete ? 'β' : 'β'} Anti Delete
${antiLink ? 'β' : 'β'} Anti Link
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
