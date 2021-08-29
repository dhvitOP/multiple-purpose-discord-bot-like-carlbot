const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "nitro-emojis",
  aliases: [],
  execute: async(client, message, args) => {

   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   if(db.fetch(`nitroemoji_${message.guild.id}`) == true) {
          var aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Now Nitro Emojis:", "Disabled")
   message.channel.send(aembed);
   } else {
       db.set(`nitroemoji_${message.guild.id}`, true)
           var aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Now Nitro Emojis:", "Enabled")
   message.channel.send(aembed);
   }

  }
}
