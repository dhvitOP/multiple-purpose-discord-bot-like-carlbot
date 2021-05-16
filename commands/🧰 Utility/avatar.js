const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av"],
  execute: async(client, message, args, data, db) => {
    if (!message.mentions.users.size) {     
        let embed = new Discord.MessageEmbed()
		
          .setColor("RANDOM")
          .setAuthor(message.author.username + "'s Avatar", message.author.displayAvatarURL)
          .setImage(message.author.displayAvatarURL({size: 4096, dynamic: true}))  
        
        message.channel.send(embed)
    }

    const avatarList = message.mentions.users.map(user => {
        return `${user.username},${user.displayAvatarURL({size: 4096, dynamic: true})}`;
    });

    for (var i = 0; i < avatarList.length; i++) {
        let Username = avatarList[i].split(',')[0];
        let AvatarURL = avatarList[i].split(",").pop();

        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor(Username + "'s Avatar", AvatarURL)
          .setImage(AvatarURL)
        
        message.channel.send(embed)
    }
}
}
module.exports.help = {
    name: "avatar",
    description: "Gets user's avatar from a mention",
    usage: "avatar <mention>",
    type: "Utility",
}
