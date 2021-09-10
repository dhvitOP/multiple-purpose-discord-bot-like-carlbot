const Discord = require("discord.js");

module.exports = {
  name: "servers",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("I'm in " + `${client.guilds.cache.size}` + " servers!")
        .setImage(`https://voidbots.net/api/embed/${client.user.id}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL);
<<<<<<< HEAD
    message.channel.send({embeds: [embed]});
=======
    message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "servers",
    description: "Display a number of servers",
    usage: "servers",
    type: "Utility"   
}