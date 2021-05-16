const Discord = require("discord.js");

     
            module.exports = {
  name: "vote",
  aliases: ["v"],
  execute: async(client, message, args, data, db) => {

           const embed= new Discord.MessageEmbed()
           .addField(`Vote us Here -`, `[Click Here](https://discordbotlist.com/bots/dumb-bot/upvote)  [Void Bots](https://voidbots.net/bot/828959241586606110/vote)`)
          message.channel.send(embed)
        }
            }
module.exports.help = {
    name: "vote",
    description: "Vote the bot",
    usage: "vote",
    type: "General"  
}