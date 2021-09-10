const db = require("quick.db");
const fs = require("fs");
const yaml = require("js-yaml");
const Discord = require("discord.js");
const { mainprefix, defaultjoinmessage, defaultleavemessage, color } = require("../../config.js");

module.exports = {
  name: "set",
  aliases: ["prefix", "set-prefix", "prefix-set"],
  execute: async(client, message, args) => {
     let embed = db.fetch(`embed_${message.guild.id}`)
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "You need `MANAGE GUILD` to configure the server settings!"
      );
    let content = args[0];
    let prefix = await db.get(`guildprefix_${message.guild.id}`);
    if (prefix === null) prefix = mainprefix;

    
    
      let newprefix = args[0];

      if (!newprefix) {
        return message.channel.send(prefixembed);
      }
      let changedprefix = new Discord.MessageEmbed()
        .setTitle(`**Prefix Updated**`)
             .setColor(`${embed || color}`)
        .setDescription(
          `** Old Value **\n${prefix}\n** New Value **\n${newprefix}`
        )
        .setFooter(message.guild.name, client.user.displayAvatarURL());
      db.delete(`guildprefix_${message.guild.id}`);
      db.set(`guildprefix_${message.guild.id}`, newprefix);
<<<<<<< HEAD
      return message.channel.send({embeds: [changedprefix]});
=======
      return message.channel.send(changedprefix);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
    

  
  }
}
  module.exports.help = {
  name: "set",
  description: "This will set the config",
  usage: "set",
  type: "Moderation" 
}