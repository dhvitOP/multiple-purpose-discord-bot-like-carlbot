const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "dict",
  aliases: ["dictator"],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("dictator", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "dictator",
    description: "Sends a dictator photo of mentioned person ",
    usage: "dictator",
    type: "Image" 
}
