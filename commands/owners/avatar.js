const Discord = require('discord.js');


module.exports = {
	name: 'c-av',
  aliases: ['av-c'],
	execute: async(client, message, args) => {
    if(message.author.id == "720632216236851260" || message.author.id == "780029934163722280"){ 
const embed = new Discord.MessageEmbed().setColor('#FF00FF')
	

		await client.user.setAvatar(args[0])
		message.channel.send(embed.setDescription('You have successfully changed my avatar!'));
    }
	},
};