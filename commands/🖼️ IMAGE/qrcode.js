const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "qrcode",
  aliases: ["code"],
  execute: async(client, message, args, data, db) => {
const text = args.join(" ");
		if(!text){
			return message.channel.send("MISSING_TEXT");
		}
    
	
        
		const embed = new Discord.MessageEmbed()
			.setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)
<<<<<<< HEAD
		message.channel.send({embeds: [embed]})
=======
		message.channel.send(embed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

		
    
	}
}
module.exports.help = {
    name: "qrcode",
    description: "Sends a qrcode photo of text you have given",
    usage: "qrcode",
    type: "Image" 
}