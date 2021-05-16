const db = require("quick.db");
module.exports = {
  name: "leave",
  aliases: [],
  execute: async(client, message, args) => {

if(!message.member.hasPermission("MANAGE_SERVER"))
{
  return;
} 
  var wchannelop = message.mentions.channels.first().id || args[0];
  if(!args[0])
  {
    return message.channel.send("You didnt gave me a channel id!!");
  }
  
 
 db.set(`leavechannel_${message.guild.id}`, wchannelop)
 message.channel.send(`Done your channel (${wchannelop}) has been set in database`);



  }
}
module.exports.help = {
    name: "leave",
    description: "Set the leave channel of server",
    usage: "leave <channel>",
    type: "General"  
}