const superagent = require('superagent');
const Discord = require('discord.js');

module.exports = {
  name: "joke",
  aliases: [],
  execute: async(client, message, args, data, db) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor("RANDOM");
<<<<<<< HEAD
        message.channel.send({embeds: [jEmbed]});
=======
        message.channel.send(jEmbed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
		})
    }
}
module.exports.help = {
    name: "joke",
    description: "Display a random joke",
    usage: "joke",
    type: "Fun"  
}