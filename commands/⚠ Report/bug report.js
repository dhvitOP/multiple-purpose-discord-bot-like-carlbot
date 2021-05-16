const { MessageEmbed } = require("discord.js");


module.exports = {
  name: "bug-report",
  aliases: ["bug", "report-bug", "bgr", "report", "error"],
  execute: async(client, message, args) => {
if(!args[0])
{
  message.channel.send("PLease Give me Something to report!!")
  return;
}
let args1 = args.join(' ');
const channel = client.channels.cache.get("832304804469801021")
const embed = new MessageEmbed()
.setDescription(`**Bug Reported**\n Reporter : <@!${message.member.id}>\n Bug : ${args1}\n GUild : ${message.guild.name}`)
channel.send(embed)
message.channel.send("Done your bug report has been sent to the developers thanks for reporting bug we will try to fix asap :)")
      
      

  }
}
module.exports.help = {
    name: "bug-report",
    description: "To report a bug",
    usage: "bug-report",
    type: "Giveaway"  
}