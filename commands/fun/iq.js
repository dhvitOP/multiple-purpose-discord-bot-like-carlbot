const Discord = require("discord.js");

module.exports = {
  name: "iq",
  aliases: ["iqtest"],
  execute: async(client, message, args, data, db) => {
try {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.MessageEmbed()
  .setTitle(":brain: IQ Test:")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setColor(`RANDOM`)
  .setTimestamp()
message.channel.send(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Something went wrong... :cry:"
    }})
  }
}
}
module.exports.help = {
    name: "iq",
    description: "Display a user IQ",
    usage: "iq",
    type: "Fun"   
}

