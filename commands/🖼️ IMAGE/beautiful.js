const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "beautiful",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("beautiful", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "beautiful.png");
	
		message.channel.send(attachment);

	}
}
  module.exports.help = {
    name: "beautiful",
    description: "Sends a beautiful photo of mentioned person ",
    usage: "beautiful",
    type: "Image" 
}
