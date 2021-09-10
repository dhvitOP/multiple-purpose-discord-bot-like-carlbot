const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "suggest",
  aliases: ["suggestion"],
  execute: async(client, message, args) => {
if(!args[0])
{
  message.channel.send("PLease Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("832304805506187274")
const embed = new MessageEmbed()
.setDescription(`**Suggest Reported**\n Reporter : <@!${message.member.id}>\n Suggestion : ${args1}\n GUild : ${message.guild.name}`)
<<<<<<< HEAD
channel.send({embeds: [embed]})
=======
channel.send(embed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
message.channel.send("Done your suggestion report has been sent to the developers!!")



  }
}
module.exports.help = {
    name: "suggest",
    description: "To suggest any feature",
    usage: "suggest",
    type: "Giveaway"  
}