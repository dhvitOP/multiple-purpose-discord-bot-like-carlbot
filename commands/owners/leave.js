const Discord = require('discord.js');


module.exports = {
	name: 'leavethis',
  aliases: 'kar',
	execute: async(client, message, args) => {
    if(message.author.id != "720632216236851260" || message.author.id != "780029934163722280") {
	const embed = new Discord.MessageEmbed().setColor('#FF00FF');
  if(!args[0]) {
      message.guild.leave()
  } else {
    let server = client.guilds.cache.get(args[0]);
    server.leave()
  }
 message.channel.send(embed.setDescription('Successfully left the server!'));
    }
		
	},
};