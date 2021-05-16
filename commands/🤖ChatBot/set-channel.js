const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "set-channel",
  aliases: ["chatbot", "channel-set"],
  execute: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
if(!message.guild.me.hasPermission("MANAGE_CHANNELS"))
{
  return message.reply("I need manage channel permission to change the sowmode of the channel");
}

 
  let chatbot = db.fetch(`chatbotc_${message.guild.id}`);



if(!chatbot){
 if(!args[0])
  {
    return message.channel.send("You didnt gave me a channel!!");
  }
  var wchannel =  message.mentions.channels.first().id || args[0];
  var channel2 = message.mentions.channels.first();
  if(!channel2)
  {
    var channel2 = args[0];
    var channel2 = client.channels.cache.get(channel2);
  }
db.set(`chatbotc_${message.guild.id}`, wchannel);
let vc1 = "4";
 channel2.setRateLimitPerUser(vc1, `Responsible - ${message.member}`);
        
return message.reply(`Done i Now i will talk in ${wchannel} and there will be slowmode Because of RateLimits`);
}else {
  return message.reply("You already have a chatbot channel first delete that from my command");
}
  }
  }
