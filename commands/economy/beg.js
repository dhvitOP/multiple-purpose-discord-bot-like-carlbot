const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "beg",
  aliases: ["dedo"],
  execute: async(client, message, args) => {

  let user = message.author;

  let timeout = 180000;
  let amount = 5;

  let beg = await db.fetch(`beg_${message.author.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark:  You've begged and received ${amount} coins | poor guy ewww`);
<<<<<<< HEAD
  message.channel.send({embeds: [moneyEmbed]})
=======
  message.channel.send(moneyEmbed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  db.add(`money_${message.author.id}`, amount)
  db.set(`beg_${message.author.id}`, Date.now())


  }
}}


module.exports.help = {
    name: "beg",
    description: "Beg money",
    usage: "beg",
    type: "Economy"  
}
