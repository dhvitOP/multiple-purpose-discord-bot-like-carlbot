const Discord = require("discord.js");

module.exports = {
  name: "flatearth",
  aliases: ["proof"],
  execute: async(client, message, args, data, db) => {
  try {
	let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("If the earth isn\'t flat, explain this:")
	.setImage("https://img.buzzfeed.com/buzzfeed-static/static/2017-09/12/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13197-1505231830-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto")
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
    name: "flatearth",
    description: "Shows why the Earth is flat",
    usage: "flatearth",
    type: "Fun" 
}
