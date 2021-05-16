const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "purge",
  aliases: ["clear"],
  execute: async(client, message, args) => {
if (message.member.hasPermission('MANAGE_MESSAGES')) {
let amount = args[0];
		if(!amount || isNaN(amount) || parseInt(amount) < 1){
			return message.channel.send("MISSING AMOUNT");
		}

		await message.delete();

		const user = message.mentions.users.first();

		let messages = await message.channel.messages.fetch({limit:100});
		messages = messages.array();
		if(user){
			messages = messages.filter((m) => m.author.id === user.id);
		}
		if(messages.length > amount){
			messages.length = parseInt(amount, 10);
		}
		messages = messages.filter((m) => !m.pinned);
		amount++;

		message.channel.bulkDelete(messages, true);

		let toDelete = null;

		if(user){
			toDelete = await message.channel.send("🗑️CLEARED MEMBER MESSAGES🗑️");
		} else {
			toDelete = await message.channel.send("CLEARED MESSAGES");
			
		}

		setTimeout(function(){
			toDelete.delete();
		}, 2000);
        
	}
	}

}

module.exports.help = {
    name: "purge",
    description: "Purges the messages of the channel",
    usage: "Purge <number>",
    type: "Moderation"
}