const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "triggered",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 let left = "left-right";
		const buffer = await AmeAPI.generate("triggered", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "triggered",
    description: "Sends a triggered photo of mentioned person ",
    usage: "triggered",
    type: "Image" 
}
