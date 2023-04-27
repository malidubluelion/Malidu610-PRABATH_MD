const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("Malidu_Hansana")
global.mongodb = process.env.MONGODB_URI || "mongodb://uczv5j5giubjvx3d4s6p:1BVTujy9IO71SDd3vyQ6@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bgij7uojfg3j2s3"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/maliduhansana610'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/maliduhansana6254' // add your username
global.sudo = process.env.SUDO || '94772356258'
global.devs = '94772356258';
global.website = 'https://github.com/prabathLK/maliduhansana' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/48bfd8ccde49643b3ffb9.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'Malidu Hansana',
  autosticker: process.env.AUTO_STICKER || 'false',
  autovoice: process.env.AUTO_VOICE || 'false',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/48bfd8ccde49643b3ffb9.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*The bot developed by Malidu* 🎊',
  ownername:process.env.OWNER_NAME || 'MALIDU',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD::UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV8xNTBjMTQ4MGI5MjIwNl92aTo6QWxlcnRQbHVtYmluZwo6OjM4YmFiNmZjMzMxN2NiMTA5MmUxOTZmNGU2MA==',
  author: process.env.PACK_INFO.split(";")[0] || 'MALIDUHANSANA', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'on',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
