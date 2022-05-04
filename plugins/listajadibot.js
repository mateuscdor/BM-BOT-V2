async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply( '*𖥨ํ∘̥⃟⸽⃟💎Lista de Sub bots por BM-BOT*\n\n*😸 Puedes contactarlos para solicitar que se unen a tu grupo*\n\n*Considera por favor:*\n*𖥨ํ∘̥⃟⸽⃟💎 Ser amable, no insistir ni discutir*\n\n*𖥨ํ∘̥⃟⸽⃟💎 Si el siguiente texto esta vacio es que no hay ningún Sub bot disponible en este momento, inténtelo mas tarde*\n\n*𖥨ํ∘̥⃟⸽⃟💎 Si quieres Ser Bot escribe #jadibot o #serbot*\n\n*𖥨ํ∘̥⃟⸽⃟💎 _NOTA: ️SON PERSONAS QUE NO CONOCEMOS. EL EQUIPO DE BM-NOT NO SE HACE RESPONSABLE DE LO QUE PUEDA OCURRIR._*')
  m.reply(users.map(v => '💎 Wa.me/' + v.jid.replace(/[^0-9]/g, '') + ` ⬅️ escriba: ${usedPrefix}estado \n(${v.name})\n`).join('\n'))
}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']

module.exports = handler 
