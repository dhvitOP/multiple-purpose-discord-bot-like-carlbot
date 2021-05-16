const Discord = require("discord.js");

module.exports = {
  name: "roleid",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    var mention = message.mentions.roles.first();
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Mention a user to get their ID!"
        }})
    const lolid = new Discord.MessageEmbed()
   
    .setColor("RANDOM")
    .addField('Here is ' + `${mention}`, mention.id)
    message.channel.send(lolid)  
}
}
module.exports.help = {
    name: "roleid",
    description: "Display a role ID",
    usage: "roleid",
    type: "Utility"  
}