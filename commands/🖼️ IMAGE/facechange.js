const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
const Canvas = require("canvas");
module.exports = {
  name: "facechange",
  aliases: ["facepalm"],
  execute: async(client, message, args, data, db) => {
 

const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
	const canvas = Canvas.createCanvas(632, 357),
			ctx = canvas.getContext("2d");
        
		// Draw background for transparent avatar
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, 632, 357);

		// Draw avatar
		const avatar = await Canvas.loadImage(user.displayAvatarURL({ format: "png", size: 512 }));
		ctx.drawImage(avatar, 199, 112, 235, 235);
        
		// Draw layer
		const layer = await Canvas.loadImage("./images/facepalm.png");
		ctx.drawImage(layer, 0, 0, 632, 357);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "facepalm.png");


		message.channel.send(attachment);


	}
}
  module.exports.help = {
    name: "facechange",
    description: "Sends a changed face photo",
    usage: "facechange",
    type: "Image" 
}
