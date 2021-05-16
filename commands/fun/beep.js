const Discord = module.require("discord.js");

module.exports = {
  name: "beep",
  aliases: [],
  execute: async(client, message, args, data, db) => {

await message.channel.send({embed: {
 color: 3447003,
 description: "Boop!"
}});

}
}
module.exports.help = {
    name: "beep",
    description: "Beep!",
    usage: "beep",
	type: "Fun"
}
