 const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "remove-channel",
  aliases: ["channel-remove"],
  execute: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
 let chatbot = db.fetch(`chatbotc_${message.guild.id}`);
  if(chatbot){
    let vc1 = "0";
    let checkc = client.channels.cache.get(chatbot);
 checkc.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
     db.delete(`chatbotc_${message.guild.id}`);
     message.reply("Done i have deleted the channel of chatbot from my database");
     return;
  }
  else {
    return message.reply("You dont have a channel Please add it first");
  }
  }
}
  