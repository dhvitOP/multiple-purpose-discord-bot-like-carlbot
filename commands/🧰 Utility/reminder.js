const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply')
const ms = require("ms")
module.exports = {
    name: 'reminder',
  aliases: ["remindme", "remind"],
    execute: async(client, message, args) => {
        let time = args[0]
        if(!time) {
          var embed = new MessageEmbed()
   
        .setDescription("<a:testfail:841362226149064755> **Wrong Usage** <a:testfail:841362226149064755> \n What is the time when the reminder should be off? ")
        .setColor("RANDOM")
<<<<<<< HEAD
        return message.channel.send({embeds: [embed]});
=======
        return message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        }
        if(ms(time) > ms("1w")){

         var embed = new MessageEmbed()
           
         .setDescription(`<a:testfail:841362226149064755> **Wrong Usage** <a:testfail:841362226149064755> \n ${message.author.tag} You cannot set your reminder for more than 1w`)
          .setColor("RANDOM")
<<<<<<< HEAD
         return message.channel.send({embeds: [embed]});
=======
         return message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        }
        let alert = args.slice(1).join(" ")
        if(!alert) {
          var embed = new MessageEmbed()
            
         .setDescription(`<a:testfail:841362226149064755> **Wrong Usage** <a:testfail:841362226149064755> \n What is reminder for?`)
          .setColor("RANDOM")
<<<<<<< HEAD
         return message.channel.send({embeds: [embed]});
=======
         return message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
          
        }
       var embed = new MessageEmbed()
         .setDescription(`<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>`)   
        .setColor("RANDOM")
        .addField(`Time:`, `\`${time}\``, true)
        .addField(`For:`, `\`${alert}\``, true)
<<<<<<< HEAD
        message.lineReply({embeds: [embed]})
=======
        message.lineReply(embed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        setTimeout(() => {
            let DP = new MessageEmbed()
            .setAuthor(`Your reminder is Done`)
            .setColor("RANDOM")
            .addField("Duration", `\`${time}\``, true)
            .addField(`Reason:`, `\`${alert}\``, true)
<<<<<<< HEAD
            message.author.send({embeds: [DP]})
=======
            message.author.send(DP)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        }, ms(time))
    }
}