const Discord = module.require("discord.js");

module.exports = {
  name: "members",
  aliases: ["memberscount", "membercount"],
  execute: async(client, message, args, data, db) => {  

 
  
  const embed = new Discord.MessageEmbed()
    .setAuthor("Members", message.guild.iconURL)
    .setColor("RANDOM")
    .addField("Overall Members:", message.guild.memberCount || message.guild.members.size)
  
<<<<<<< HEAD
  message.channel.send({embeds: [embed]});
=======
  message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "members",
    description: "How many members are in the current server",
    usage: "members",
    type: "Utility" 
}