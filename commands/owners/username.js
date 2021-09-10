const Discord = require('discord.js');


module.exports = {
	name: 'username',
  aliases: 'c-name',
	execute: async(client, message, args) => {
    if(message.author.id == "720632216236851260" || message.author.id == "780029934163722280") {
		const embed = new Discord.MessageEmbed().setColor('#FF00FF')
<<<<<<< HEAD
embed.setDescription('You have successfully changed my username!')
		await client.user.setUsername(args.join(' ')).then(
			message.channel.send({embeds: [embed]})
=======
		await client.user.setUsername(args.join(' ')).then(
			message.channel.send(embed.setDescription('You have successfully changed my username!'))
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
		).catch(e => e)
    }
	},
};