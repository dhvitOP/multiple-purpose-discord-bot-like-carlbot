const db = require("quick.db");
module.exports = {
  name: "welcome",
  aliases: [],
  execute: async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
  var wchannel =  message.mentions.channels.first().id || args[0];
  if(!args[0])
  {
    return message.channel.send("You didnt gave me a channel!!");
  }

 
 db.set(`ichannel_${message.guild.id}`, wchannel)
 message.channel.send(`Done your channel (${wchannel}) has been set in database`);



  }
}
module.exports.help = {
    name: "welcome",
    description: "Set the welcome channel of server",
    usage: "welcome <channel>",
    type: "General"  
}