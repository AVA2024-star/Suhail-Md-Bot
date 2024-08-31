const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104861292";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_50_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICA4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWG03TVAxK2RjbmMwU1FoZmNJQy9Cem4vd2c4R0x2ZGs1bURqdGlKU2tzaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNThqbWNVMjFUbFdFSTBUX1ZLN3IwQVwiLFxuICBcInBob25lSWRcIjogXCJjYTc2ZGZiZS1hNjUwLTQyMzUtOTJhNy0zYjkxMDYxYWQ3MTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgNTYsXG4gICAgICAxNDUsXG4gICAgICAxMDgsXG4gICAgICA0NSxcbiAgICAgIDQyLFxuICAgICAgMTA1LFxuICAgICAgMTMxLFxuICAgICAgNyxcbiAgICAgIDUsXG4gICAgICAxOTIsXG4gICAgICAxMDYsXG4gICAgICAxNjcsXG4gICAgICAxMTAsXG4gICAgICA5OCxcbiAgICAgIDE2NixcbiAgICAgIDE3NCxcbiAgICAgIDEwOCxcbiAgICAgIDQ2LFxuICAgICAgODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM0LFxuICAgICAgMjI3LFxuICAgICAgMTgwLFxuICAgICAgNjAsXG4gICAgICAyMTIsXG4gICAgICAxOTgsXG4gICAgICAyMzEsXG4gICAgICAxNjYsXG4gICAgICAxMDAsXG4gICAgICAxNjUsXG4gICAgICAxMDQsXG4gICAgICA4NyxcbiAgICAgIDE2NSxcbiAgICAgIDM0LFxuICAgICAgNTgsXG4gICAgICAyMTksXG4gICAgICAxMTAsXG4gICAgICAxMyxcbiAgICAgIDE2NSxcbiAgICAgIDEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxHUUc4OVZHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA0ODYxMjkyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDE4MDU0ODQ0MDI5Mzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pbGljY0VFTEM4enJZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTlRqRlJNYlJlUVBYNUxONDg3SkN4dlBMVTc0bG1HZzZpSGcycTVaZFkxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrbG0yNGhnYS9XRFpWZlFDRzFVQ3ZPRUF1V1c5THVZSUZiM3BoSmFsYnNmVmNtVVVHM1U4RDkyL3oya2pZT1R1TWlUUUY3N3YzUDIwVEJRbHNhZWxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKWHFVV2d6ZVdyNlh2cFNyTW1wRXJMVXBrajZmeUt1UjB6VGs2cVR5RjQxZ1FxWjNROTA5NktWSk95SENDcmFBNHNjV2l4eGl0Y3Z2OVlGTnVwUEZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA0ODYxMjkyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTE0NDYyOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
