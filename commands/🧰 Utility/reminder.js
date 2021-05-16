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
        return message.channel.send(embed);
        }
        if(ms(time) > ms("1w")){

         var embed = new MessageEmbed()
           
         .setDescription(`<a:testfail:841362226149064755> **Wrong Usage** <a:testfail:841362226149064755> \n ${message.author.tag} You cannot set your reminder for more than 1w`)
          .setColor("RANDOM")
         return message.channel.send(embed);
        }
        let alert = args.slice(1).join(" ")
        if(!alert) {
          var embed = new MessageEmbed()
            
         .setDescription(`<a:testfail:841362226149064755> **Wrong Usage** <a:testfail:841362226149064755> \n What is reminder for?`)
          .setColor("RANDOM")
         return message.channel.send(embed);
          
        }
       var embed = new MessageEmbed()
         .setDescription(`<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>`)   
        .setColor("RANDOM")
        .addField(`Time:`, `\`${time}\``, true)
        .addField(`For:`, `\`${alert}\``, true)
        message.lineReply(embed)
        setTimeout(() => {
            let DP = new MessageEmbed()
            .setAuthor(`Your reminder is Done`)
            .setColor("RANDOM")
            .addField("Duration", `\`${time}\``, true)
            .addField(`Reason:`, `\`${alert}\``, true)
            message.author.send(DP)
        }, ms(time))
    }
}