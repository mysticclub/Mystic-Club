import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Staff De CrowBot
global.owner = [
   ['51920227615', 'Creador WillZek💛', true],
   ['', 'CrowBot Soporte', true],
   ['', 'Dev Diomar', true],
   ['', 'Dev ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜', true],
   ['', 'Dev Prak', true],
   ['', 'Dev Darkcore', true],
]

global.creadorbot = [
   ['51920227615', 'WillZek', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['50368471855', '', '', '', '', '', '']

global.prems = ['']

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【✧】𝐂𝐫𝐨𝐰𝐁𝐨𝐭 -𝐒𝐓 ❖'
global.botname = '(✦◠‿◠)𝑪𝒓𝒐𝒘𝑩𝒐𝒕-𝑺𝑻'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍨★ ׄ ꒱ 𝑪𝒓𝒐𝒘𝑩𝒐𝒕 - 𝑺.𝑪.𝑨 ୭'
global.author = '(⁎˃ᴗ˂⁎)𝐌𝐚𝐝𝐞 𝐁𝐲 𝐖𝐢𝐥𝐥𝐙𝐞𝐤𓆪'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ 𝗍ᥱᥲm m᥆᥆ᥒ-𝖿᥆rᥴᥱ'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.namebot = 'ᥴr᥆ᥕᑲ᥆𝗍 mc'
global.textbot = `「 🔱 𝐂𝐫𝐨𝐰𝐁𝐨𝐭 - MC 🔱 」`
global.vs = '2.1.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')
global.crowurl = fs.readFileSync('./media/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobot = 'https://github.com/WillZek/CrowBot-ST'
global.grupo = 'https://chat.whatsapp.com/B7POPrlJiZf7UWHJKvzVkx'
global.comu = 'https://chat.whatsapp.com/Bgfb6Ag13BDCvwzOtldlCm'
global.channel = 'https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W'
global.insta = 'https://www.instagram.com/crowbot-wa'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
