const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "pay",
  aliases: ["give"],
  execute: async(client, message, args) => { 
  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Mention someone to pay`);

  if (!user) {
<<<<<<< HEAD
      return message.channel.send({embeds: [embed1]})
=======
      return message.channel.send(embed1)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Specify an amount to pay`);
  
  if (!args[1]) {
<<<<<<< HEAD
      return message.channel.send({embeds: [embed2]})
=======
      return message.channel.send(embed2)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }

    if (isNaN(args[1])) return message.channel.send({embed: {
                    color: 16734039,
                    description: "You must enter the amount of money to pay!"
                }})

  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You can't pay someone negative money`);

  if (message.content.includes('-')) { 
<<<<<<< HEAD
      return message.channel.send({embeds: [embed3]})
=======
      return message.channel.send(embed3)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You don't have that much money`);

  if (member < args[1]) {
<<<<<<< HEAD
      return message.channel.send({embeds: [embed4]})
=======
      return message.channel.send(embed4)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  You have payed ${user.user.username} ${args[1]} coins`);

<<<<<<< HEAD
  message.channel.send({embeds: [embed5]})
=======
  message.channel.send(embed5)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  db.add(`money_${message.author.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])

}
}
module.exports.help = {
    name: "pay",
    description: "Pay money to mentioned user",
    usage: "pay <mention> <money>",
    type: "Economy"  
}
