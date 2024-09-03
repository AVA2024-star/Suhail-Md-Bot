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

  sessionName:process.env.SESSION_ID || "SUHAIL_18_33_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDkzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmSEMxamtmNmVwZHQxK1RKdEZ2cHFwN0xkK1pseHRqeG8xTkthdHVCbzZjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMDQ4NjEyOTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBCNThFOTdBNEY1ODdDQjlDOEVGQkVGQUREQzMyMzlDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTM4ODM4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSbzVPdXVSNlR0NjlENE83eWo2ZmVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE3NGZhMjFkLTcwMzctNDYzZC05M2VhLWRlYjQ4MTRhNTgxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDExNSxcbiAgICAgIDE0NSxcbiAgICAgIDExOCxcbiAgICAgIDIxOCxcbiAgICAgIDIwOSxcbiAgICAgIDIzNSxcbiAgICAgIDg0LFxuICAgICAgMjM4LFxuICAgICAgODEsXG4gICAgICAxNCxcbiAgICAgIDM4LFxuICAgICAgMTE0LFxuICAgICAgMjUwLFxuICAgICAgMjI3LFxuICAgICAgOTYsXG4gICAgICAxODEsXG4gICAgICAyMDIsXG4gICAgICA2MixcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAyOCxcbiAgICAgIDkxLFxuICAgICAgMSxcbiAgICAgIDgxLFxuICAgICAgMjUsXG4gICAgICA5MyxcbiAgICAgIDEyMixcbiAgICAgIDY1LFxuICAgICAgMjAyLFxuICAgICAgOTcsXG4gICAgICAyNDgsXG4gICAgICAyNyxcbiAgICAgIDEwMyxcbiAgICAgIDIyMCxcbiAgICAgIDE2MCxcbiAgICAgIDMyLFxuICAgICAgMjI5LFxuICAgICAgMTY2LFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTlWS0RNWUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQ4NjEyOTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwMTgwNTQ4NDQwMjkzOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTm1saWNjRUVMMnMzYllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOVGpGUk1iUmVRUFg1TE40ODdKQ3h2UExVNzRsbUdnNmlIZzJxNVpkWTEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZTQWxRUERNM09XODJsQWNaRkc3VjVSd01Nb0Irak9OMC92VWJ0UE9LelpvV2Q4Y0NMakoyTEtZZjRvblg5aFVjTFFjaFlpeDFjbUlTUThHcmpCWkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRPL2VXZjFob1h6RWpKR1haZnhQNFV2dllzR29mcDJaek5rRzhaMW9uM0FOYkl2eEpPb2RPTmJVc2k4OW5sSXJnU2wwQTFBYTRQVENBQTA5ekk1eUNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDQ4NjEyOTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1Mzg4MzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXg2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBeDYuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
