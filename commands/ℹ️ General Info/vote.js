const Discord = require("discord.js");

     
            module.exports = {
  name: "vote",
  aliases: ["v"],
  execute: async(client, message, args, data, db) => {

           const embed= new Discord.MessageEmbed()
           .addField(`Vote us Here -`, `[Click Here](https://discordbotlist.com/bots/dumb-bot/upvote)  [Void Bots](https://voidbots.net/bot/828959241586606110/vote)`)
<<<<<<< HEAD
          message.channel.send({embeds: [embed]})
=======
          message.channel.send(embed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        }
            }
module.exports.help = {
    name: "vote",
    description: "Vote the bot",
    usage: "vote",
    type: "General"  
}