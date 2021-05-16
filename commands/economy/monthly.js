const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

    module.exports = {
  name: "monthly",
  aliases: [],
  execute: async(client, message) => {

  let user = message.author;
  let timeout = 2592000000;
  let amount = 2000;
    
  let weekly = await db.fetch(`monthly_${message.author.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor(16734039)
    .setDescription(`:x: You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You've collected your monthly reward of ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.author.id}`, amount)
  db.set(`weekly_${message.author.id}`, Date.now())


  }
}}


module.exports.help = {
    name: "monthly",
    description: "Get a monthly money",
    usage: "monthly",
    type: "Economy"  
}