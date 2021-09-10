const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "daily",
  aliases: [],
  execute: async(client, message, args) => {
  let user = message.author;

  let timeout = 86400000;
  let amount = 200;

  let daily = await db.fetch(`daily_${message.author.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
<<<<<<< HEAD
    message.channel.send({embeds: [timeEmbed]})
=======
    message.channel.send(timeEmbed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You've collected your daily reward of ${amount} coins`);
<<<<<<< HEAD
  message.channel.send({embeds: [moneyEmbed]})
=======
  message.channel.send(moneyEmbed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
  db.add(`money_${message.author.id}`, amount)
  db.set(`daily_${message.author.id}`, Date.now())


  }
}}


module.exports.help = {
    name: "daily",
    description: "Get a daily money",
    usage: "daily",
    type: "Economy"  
}
