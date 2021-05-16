const db = require("quick.db");
const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "logs-ticket",
  aliases: ["logs"],
  execute: async(client, message, args, data, db) => {
    var prefix =  db.fetch(`guildprefix_${message.guild.id}`);
    if(!prefix)
    {
      var prefix = ".";
    }

const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel;
		if (channel.name.includes('ticket-')) {
			if (message.member.hasPermission('ADMINISTRATOR') || channel.name === `ticket-${message.author.id}`) {
				channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('An error occurred, please try again!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[\`📄 View\`](${response.url})`)
						.setColor('GREEN');
					message.reply('the transcript is complete. Please click the link below to view the transcript', embed);
				});
			}
		}
		else {
			return message.reply(
				'you cannot use this command here. Please use this command in a open ticket.',
			);
		}

}
  }
module.exports.help = {
    name: "logs",
    description: "It will give you logs of a ticket",
    usage: "logs",
    type: "Ticket"  
}