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
<<<<<<< HEAD
message.channel.send({embeds: [embed]});
=======
message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

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

