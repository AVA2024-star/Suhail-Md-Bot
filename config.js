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

  sessionName:process.env.SESSION_ID || "SUHAIL_08_30_09_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICA0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU1LFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk91YkNGSy9sd2hIR3JtSFFZVnl3SENZZEw0eTF0M0tvaVBwalkxSUZVYlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjh2eUJ5STZJUWktYkZ2Rk82S2RtOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjZiOGRmNzMtZmJmZi00ODA1LWI2ZWMtZGMzZjQ1Y2NmZGEwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OCxcbiAgICAgIDYwLFxuICAgICAgMTA0LFxuICAgICAgMjI0LFxuICAgICAgMTg3LFxuICAgICAgMTA1LFxuICAgICAgMTA0LFxuICAgICAgMTg0LFxuICAgICAgMzEsXG4gICAgICA0NyxcbiAgICAgIDEyOCxcbiAgICAgIDI1MyxcbiAgICAgIDE2OSxcbiAgICAgIDE4NCxcbiAgICAgIDIzOSxcbiAgICAgIDExMCxcbiAgICAgIDIzNSxcbiAgICAgIDAsXG4gICAgICAyNDksXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTgyLFxuICAgICAgMjM2LFxuICAgICAgMjQ5LFxuICAgICAgNjMsXG4gICAgICAxMjAsXG4gICAgICAyMCxcbiAgICAgIDkyLFxuICAgICAgMTM1LFxuICAgICAgMTUwLFxuICAgICAgNzgsXG4gICAgICAxLFxuICAgICAgODEsXG4gICAgICA3NCxcbiAgICAgIDIwMCxcbiAgICAgIDE5OCxcbiAgICAgIDEyNyxcbiAgICAgIDIwOSxcbiAgICAgIDczLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOExHUFQ3SDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDQ4NjEyOTI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTAwMTgwNTQ4NDQwMjkzOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVsaWNjRUVLajhwTGNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOVGpGUk1iUmVRUFg1TE40ODdKQ3h2UExVNzRsbUdnNmlIZzJxNVpkWTEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVqRGRMb3o3Q1Q1V1psV0Z3WUNZTkpxTXRXbnRjOHNOMDg1enNXZVJtU3BicGQxaGVic3plY2Rqc2lnbjdKVS95REF0UFl1dU9VUXpFZURZOHB6bkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJKU1JTNVJCT1dTcExyZWRaaUwzdWcrQzdUNk4xZjd0cDM3NlpsSTY0OEZHV1VBVkkwZEJnMkhzRzBjQVF4TitwNldqT05kZUVWSkp0L0JHdUtSNGlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDQ4NjEyOTI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2NTYxODM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXg2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBeDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWek5DMVRoQW9IbmlsVU1nNXNJWDYyaGtGR3FmRXU4WTlvZ1F4YU8zZEFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjI3OTE4OTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
