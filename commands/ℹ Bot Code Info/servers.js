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
    message.channel.send(embed);
}
}
module.exports.help = {
    name: "servers",
    description: "Display a number of servers",
    usage: "servers",
    type: "Utility"   
}