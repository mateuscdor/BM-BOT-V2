let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`*πTOP 10 GAYS/LESBIANAS DEL GRUPOπ:* 
    
 *_1.- π³οΈβπ${toM(a)}π³οΈβπ_* 
 *_2.- πͺ${toM(b)}πͺ_* 
 *_3.- πͺ${toM(c)}πͺ_* 
 *_4.- π³οΈβπ${toM(d)}π³οΈβπ_* 
 *_5.- πͺ${toM(e)}πͺ_* 
 *_6.- πͺ${toM(f)}πͺ_* 
 *_7.- π³οΈβπ${toM(g)}π³οΈβπ_*
 *_8.- πͺ${toM(h)}πͺ_* 
 *_9.- πͺ${toM(i)}πͺ_* 
 *_10.- π³οΈβπ${toM(j)}π³οΈβπ_*`, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })
}
handler.help = ['top10gay','top10gays']
handler.tags = ['main']
handler.command = ['top10gay','top10gays','top10gey','top10geys','topgay']
handler.group = true

module.exports = handler
