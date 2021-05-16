const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "new",
  aliases: ["create"],
  execute: async(client, message, args) => {
    let channel3 = await db.fetch(`setuped_${message.guild.id}`);
    if(channel3 == null)
    {
      return message.reply("You havent setuped the ticket system do it by doing .setup");
    }
    if(channel3 != message.channel.id)
    {
      return message.reply(`You can only Create a ticket in ticket-box channel`)
    }
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }
   if(message.author.bot){
			return;
		}
 let user = message.author;
       let timeout = "600000";
        var weekly =  db.fetch(`messageem_${message.guild.id}_${user.id}`);
   if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
    message.channel.send("You cant You can only create 1 ticket in 1 hour to Avoid Spam Tickets")
   } else {

   db.set(`messageem_${message.guild.id}_${user.id}`, Date.now());

 
if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.id}`)) {
			return message.reply('you already have a ticket, please close your exsisting ticket first before opening a new one!');
		}

		message.guild.channels.create(`ticket-${message.author.id}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
		}).then(async channel => {
			message.reply(`you have successfully created a ticket! Please click on ${channel} to view your ticket.`);
			channel.send(`Hi ${message.author}, welcome to your ticket! Please be patient, we will be with you shortly. If you would like to close this ticket please run \`${prefix}close\``);
			let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
			if(logchannel) {
				logchannel.send(`Ticket ${message.author.id} created. Click the following to veiw <#${channel.id}>`);
			}
		});
   }
}
}


module.exports.help = {
    name: "new",
    description: "It will Create a Ticket",
    usage: "new",
    type: "Ticket"  
}