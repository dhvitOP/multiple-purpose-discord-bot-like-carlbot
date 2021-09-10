const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "servericon",
  aliases: ["icon"],
  execute: async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("RANDOM")
    .setImage(message.guild.iconURL())
    .setTimestamp()

<<<<<<< HEAD
  await message.channel.send({embeds: [embed]});
=======
  await message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "servericon",
    description: "Grabs the server icon",
    usage: "servericon",
    type: "Utility"
}