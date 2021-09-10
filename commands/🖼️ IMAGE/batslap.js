const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
module.exports = {
  name: "batslap",
  aliases: [],
  execute: async(client, message, args, data, db) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const users = [
   message.author,
		  message.mentions.users.first() || message.author
]

if(users[1] == message.author)
{
  const user1 = client.users.cache.get("828959241586606110");
  var buffer = await AmeAPI.generate("batslap", { avatar: user1.displayAvatarURL({ format: "png", size: 512 }), url: users[1].displayAvatarURL({ format: "png", size: 512 }) });
}
 if(users[1] != message.author)
 {
	var buffer = await AmeAPI.generate("batslap", { avatar: users[0].displayAvatarURL({ format: "png", size: 512 }), url: users[1].displayAvatarURL({ format: "png", size: 512 }) });
 }
	
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
<<<<<<< HEAD
		message.channel.send({embeds: [attachment]});
=======
		message.channel.send(attachment);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76

	}
}
  module.exports.help = {
    name: "batslap",
    description: "Sends a scary photo of mentioned person ",
    usage: "batslap",
    type: "Image" 
}
