const Discord = require("discord.js");
const weather = require('weather-js')

    module.exports = {
  name: "weather",
  aliases: [],
  execute: async(client, message, args, data, db) => {

if(args.length === 0){
    let errorembed = new Discord.MessageEmbed()
    .setTitle("Error :cry:")
    .setDescription("Please enter a location!")
	.setColor("FF5757")
    .setTimestamp()
<<<<<<< HEAD
  return message.channel.send({embeds: [errorembed]});
=======
  return message.channel.send(errorembed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(!result){
    let errorembed = new Discord.MessageEmbed()
    .setTitle("Error :cry:")
    .setDescription("Please enter a vaild location!")
	.setColor("FF5757")
    .setTimestamp()
<<<<<<< HEAD
  return message.channel.send({embeds: [errorembed]});
=======
  return message.channel.send(errorembed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) {
	let errorembed = new Discord.MessageEmbed()
    .setTitle("Error :cry:")
    .setDescription("Please enter a vaild location!")
	.setColor("FF5757")
    .setTimestamp()
<<<<<<< HEAD
  return message.channel.send({embeds: [errorembed]});
=======
  return message.channel.send(errorembed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
	}

	
    let embed = new Discord.MessageEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00AE86)
    .addField('Timezone', `UTC${location.timezone}`, true)
    .addField('Degree Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField('Winds', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
<<<<<<< HEAD
    message.channel.send({embeds: [embed]})
=======
    message.channel.send(embed)
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
});


}
  }
module.exports.help = {
    name: "weather",
    description: "Display a weather stats",
    usage: "weather <location>",
    type: "Utility"  
}