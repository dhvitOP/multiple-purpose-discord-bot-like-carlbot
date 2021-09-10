const Discord = require('discord.js')

module.exports = {
  name: "dependencies",
  aliases: ["dp"],
  execute: async(client, message, args, data, db) => { 
try {
	const embed = new Discord.MessageEmbed()
	  .setTitle(":bricks: Dependencies")
      .setDescription(client.user.tag + " run on " + Object.keys(require('../../package').dependencies).length + " dependencies")
	  .setTimestamp()
	  .setColor("RANDOM")
<<<<<<< HEAD
  message.channel.send({embeds: [embed]});
=======
  message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
  }
}
  }
module.exports.help = {
    name: "dependencies",
    description: "Returns the amount of dependencies that i uses",
    usage: "dependencies",
    type: "Utility" 
}
