const Discord = require("discord.js");
const { readdirSync } = require("fs");
const db = require("quick.db");

module.exports = {
  name: "bio-check",
  aliases: ['chk-bio', 'biography-check', 'check-bio'],
  description: "Shows all available bot commands.",
  execute: async (client, message, args) => {
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if(args[0])
{
var checking = db.fetch(`biography_${user.id}`);
} else {
  var checking = db.fetch(`biography_${message.author.id}`);
}
   const aembed = new Discord.MessageEmbed()
   .setDescription("<a:testing:841362113212842045> **Successfull** <a:testing:841362113212842045>")
   .addField("Bio:", checking)
   message.channel.send(aembed);
  }
}