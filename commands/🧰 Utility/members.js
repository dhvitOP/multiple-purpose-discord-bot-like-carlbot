const Discord = module.require("discord.js");

module.exports = {
  name: "members",
  aliases: ["memberscount", "membercount"],
  execute: async(client, message, args, data, db) => {  

 
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor("RANDOM")
    .addField("Overall Members:", message.guild.memberCount || message.guild.members.size)
  
  message.channel.send(embed);
}
}
module.exports.help = {
    name: "members",
    description: "How many members are in the current server",
    usage: "members",
    type: "Utility" 
}