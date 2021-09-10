const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   execute: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RANDOM");
<<<<<<< HEAD
   await message.channel.send({embeds: [embed]});
=======
   await message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
   message.delete();
}
}
  module.exports.help = {
    name: "lock",
    description: "It Locks the current channel",
    usage: "lock",
	type: "Moderation"
}
