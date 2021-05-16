const Discord = module.require("discord.js");
const Zalgo = require("to-zalgo");

    module.exports = {
  name: "zalgo",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
   await message.channel.send({embed: {
                color: 3447003,
                description: Zalgo(args.join(" "))
            }});
}
    }
module.exports.help = {
    name: "zalgo",
    description: "Generate zalgo text",
    usage: "zalgo <text>",
	type: "Fun"
}
