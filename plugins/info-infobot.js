crow += `│ 🕗 *Uptime* : ${uptime}\n`
crow += `│ 💛 *Modo* : ${bot.public ? 'Privado' : 'Publico'}\n`
crow += `│ 💛 *Comandos Ejecutados* : ${toNum(totalStats)} ( *${totalStats}* )\n`
crow += `│ 💛 *Grupos Registrados* : ${toNum(totalchats)} ( *${totalchats}* )\n`
crow += `│ 🍧 *Registrados* : ${toNum(totalreg)} ( *${totalreg}* ) Usuarios\n`
crow += `╰─╼\n\n`
crow += `╭─✪「 *Chats De Alya-Bot* 」✪\n`
crow += `│ 🧃 *${groupsIn.length}* Chats en Grupos\n`
crow += `│ 💛 *${groupsIn.length}* Grupos Unidos\n`
crow += `│ 💛 *${groupsIn.length - groupsIn.length}* Grupos Salidos\n`
crow += `│ 💬 *${chats.length - groupsIn.length}* Chats Privados\n`
crow += `│ 💭 *${chats.length}* Chats Totales\n`
crow += `╰─╼\n\n`
crow += `╭─✪「 *NodeJS Uso de memoria* 」✪\n`
crow += `${'```' + Object.keys(used).map((key, _, arr) => `│ ${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}\n`
crow += `╰─╼`

await conn.reply(m.chat, crow, fkontak, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'], externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: '↷✦╎Info - Bot╎🚩˖ ⸙',body: packname, previewType: 0, thumbnail: icons, sourceUrl: redes}}})
// await conn.sendFile(m.chat, imagen1, 'Menu.jpg', Menu, fkontak, null, rcanal)
}
handler.help = ['infobot']
handler.tags = ['main']
handler.command = ['info', 'infobot']
handler.estrellas = 5;

export default handler

function toNum(number) {
if (number >= 1000 && number < 1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number >= 1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else if (number <= -1000 && number > -1000000) {
return (number / 1000).toFixed(1) + 'k'
} else if (number <= -1000000) {
return (number / 1000000).toFixed(1) + 'M'
} else {
return number.toString()
}}