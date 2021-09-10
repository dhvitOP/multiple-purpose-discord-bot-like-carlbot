const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    module.exports = {
  name: "withdraw",
  aliases: ["with"],
  execute: async(client, message, args) => {

  let user = message.author;

  let member = db.fetch(`money_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.author.id}`)
    
    db.subtract(`bank_${message.author.id}`, money)
    db.add(`money_${message.author.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:Check:618736570337591296> You have withdrawn all your coins from your bank`);
<<<<<<< HEAD
  message.channel.send({embeds: [embed5]})
=======
  message.channel.send(embed5)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:Cross:618736602901905418> Specify an amount to withdraw`);
  
  if (!args[0]) {
<<<<<<< HEAD
      return message.channel.send({embeds: [embed2]})
=======
      return message.channel.send(embed2)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:Cross:618736602901905418> You can't withdraw negative money`);

  if (message.content.includes('-')) { 
<<<<<<< HEAD
      return message.channel.send({embeds: [embed3]})
=======
      return message.channel.send(embed3)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:Cross:618736602901905418> You don't have that much money in the bank`);

  if (member2 < args[0]) {
<<<<<<< HEAD
      return message.channel.send({embeds: [embed4]})
=======
      return message.channel.send(embed4)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`<:Check:618736570337591296> You have withdrawn ${args[0]} coins from your bank`);

<<<<<<< HEAD
  message.channel.send({embeds: [embed5]})
=======
  message.channel.send(embed5)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  db.subtract(`bank_${message.author.id}`, args[0])
  db.add(`money_${message.author.id}`, args[0])
  }
}
    }

module.exports.help = {
    name: "withdraw",
    description: "Withdraw money from bank",
    usage: "withdraw <money>",
    type: "Economy"  
}
