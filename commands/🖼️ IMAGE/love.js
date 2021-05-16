const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "love",
  aliases: [],
  execute: async(client, message, args, data, db) => {
const users = [
  message.mentions.users.first() || message.author,
		  message.author
]
const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${users[0].displayAvatarURL({ format: "png", size: 512 })}&user2=${users[1].displayAvatarURL({ format: "png", size: 512 })}`));
			const json = await res.json();
			const attachment = new Discord.MessageAttachment(json.message, "love.png");
			message.channel.send(attachment);


  }
}
module.exports.help = {
    name: "love",
    description: "Sends a qrcode photo of text you have given",
    usage: "love",
    type: "Image" 
}