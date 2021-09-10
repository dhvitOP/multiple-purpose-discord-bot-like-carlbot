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
<<<<<<< HEAD
   message.channel.send({embeds: [aembed]});
=======
   message.channel.send(aembed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
   } else {
       db.set(`nitroemoji_${message.guild.id}`, true)
           var aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Now Nitro Emojis:", "Enabled")
<<<<<<< HEAD
   message.channel.send({embeds: [aembed]});
=======
   message.channel.send(aembed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
   }

  }
}
