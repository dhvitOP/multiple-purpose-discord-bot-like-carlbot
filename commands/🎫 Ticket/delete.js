const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
module.exports = {
  name: "delete",
  aliases: ["nikal"],
  execute: async(client, message, args) => {
     if (!message.member.hasPermission("MANAGE_SERVER")) {
       return;
     }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.');
		}

}
}
module.exports.help = {
    name: "delete",
    description: "It will forcely delete the ticket channel",
    usage: "delete",
    type: "Ticket"  
}