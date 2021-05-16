const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "nuke",
  aliases: ["channelnuke"],
  execute: async(client, message, args, data, db) => {

	               if (!message.member.hasPermission('ADMINISTRATOR'))
{ return; }
			message.channel.send("Nuking This channel....");
			
      
			const position = message.channel.position;
			const newChannel = await message.channel.clone();
			await message.channel.delete();
			newChannel.setPosition(position);
      newChannel.send("Channel Nuked");
			return newChannel.send("https://media1.tenor.com/images/e275783c9a40b4551481a75a542cdc79/tenor.gif?itemid=3429833");
		

}
}
module.exports.help = {
    name: "nuke",
    description: "Nukes the channel",
    usage: "Nuke",
    type: "Moderation"
}