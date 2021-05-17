const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "challenger",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("challenger", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "challenger.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "challenger",
    description: "Sends a challenger photo of mentioned person ",
    usage: "challenger",
    type: "Image" 
}
