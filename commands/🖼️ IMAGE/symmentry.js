const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "triggered",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient("81ec44aee6ccbb692dabd2eb0e1454b7f0c5ef1dd805a939a291127eb26b0f5af5bb4a94f095bceade9417c25292e746504e378f2d0f3aa2864c3d775c32e76a");
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
