const Discord = require("discord.js");
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  aliases: [],
  execute: async(client, message, args, data, db) => {

if (args.length <= 0) return message.channel.send({embed: {
            color: 16734039,
            description: "You must provide a text!"
        }})

      var flipped = [];
  
  args.forEach((arg) => {
      flipped.push(flip(arg));
  });
  

const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
	  .setTitle("Flipped text: " + flipped.join(" "))
  await message.channel.send(embed);
}
}
module.exports.help = {
    name: "fliptext",
    description: "Flip some text",
    usage: "fliptext <text>",
    type: "Fun"
}