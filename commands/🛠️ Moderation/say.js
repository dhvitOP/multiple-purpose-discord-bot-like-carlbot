const Discord = module.require("discord.js");

module.exports = {
  name: "say",
  aliases: ["bol"],
  execute: async(client, message, args, data, db) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES", "MENTION_EVERYONE"))
     {
      return;
    }
        message.delete();
        const taggedChannel = await message.mentions.channels.first();
      

        if(taggedChannel) {
            await taggedChannel.send(args.join(" ").replace(taggedChannel, ""));
        } else {
            const saymessage = await args.join(" ");

            if (saymessage.length >= 1) {
                await message.channel.send(saymessage);
            } else {
                await message.channel.send({embed: {
                    color: 16734039,
                    description: "You need to enter a Message!"
                }});
            }
        }
    }
}
module.exports.help = {
    name: "say",
    description: "Sends a message through the bot",
    usage: "say <channel> <message>",
    type: "Moderation"  
}