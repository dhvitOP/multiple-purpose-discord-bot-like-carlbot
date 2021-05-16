const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "remove",
  aliases: [],
  execute: async(client, message, args, data, db) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.channel.name.includes('ticket-')) {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(' ') || x.user.username === args[0]);
			if(!member) {
				return message.channel.send(`Incorrect Usage! Correct Usage:${prefix}remove <member>`);
			}
			try{
				message.channel.updateOverwrite(member.user, {
					VIEW_CHANNEL: false,
					SEND_MESSAGES: false,
					ATTACH_FILES: false,
					READ_MESSAGE_HISTORY: false,
				}).then(() => {
					message.channel.send(`Successfully removed ${member} from ${message.channel}`);
				});
			}
			catch(e) {
				return message.channel.send('An error occurred, please try again!');
			}
		}

}
}
module.exports.help = {
    name: "remove",
    description: "Remove a person from a ticket",
    usage: "remove <mention/user_dev_ID>",
    type: "Ticket"  
}