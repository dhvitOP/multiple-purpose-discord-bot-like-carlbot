const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "magik",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("magik", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "magik",
    description: "Sends a magik photo of mentioned person ",
    usage: "magik",
    type: "Image" 
}
