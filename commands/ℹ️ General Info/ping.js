const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "ping",
  aliases: [],
  execute: async(client, message, args, data, db) => {
        await message.channel.send({embed: {
            color: 3447003,
            description: "🏓 Pinging..."
        }}).then(msg=>{
        const ping = new Discord.MessageEmbed()
        .setTitle(':ping_pong: Pong!')
		.addField("Bot ping:", + `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}` + "ms")
		.addField("Api ping:", + `${Math.round(client.ws.ping)}` + "ms")
        .setColor('RANDOM')
		.setTimestamp()
<<<<<<< HEAD
        msg.edit({embeds: [ping]});
=======
        msg.edit(ping);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
        msg.edit("\u200B")
    })
}
}


module.exports.help = {
    name: "ping",
    description: "Gets a ping",
    usage: "ping",
    type: "General"
}