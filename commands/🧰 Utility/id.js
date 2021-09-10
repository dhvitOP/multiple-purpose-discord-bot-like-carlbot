const Discord = require("discord.js");

module.exports = {
  name: "id",
  aliases: ["userid"],
  execute: async(client, message, args, data, db) => {
   var mention = message.guild.member(message.mentions.users.first());
    if(!mention) return message.channel.send({embed: {
            color: 16734039,
            description: "Mention a user to get their ID!"
        }})
    const lolid = new Discord.MessageEmbed()
    .setThumbnail(mention.user.avatarURL)
    .setColor("RANDOM")
    .addField('Here is ' + `${mention.user.username}\'s ID`, mention.id)
<<<<<<< HEAD
    message.channel.send({embeds: [lolid]})  
=======
    message.channel.send(lolid)  
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "id",
    description: "Display a user ID",
    usage: "id",
    type: "Utility"  
}