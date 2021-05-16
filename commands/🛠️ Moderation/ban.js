const Discord = require("discord.js");

module.exports = {
  name: "ban",
  aliases: [],
  execute: async(client, message, args, data, db) => {
    
    if (message.member.hasPermission("BAN_MEMBERS")) {
      if(!message.guild.me.hasPermission('BAN_MEMBERS')){ return message.channel.send('I dont have enough permissions');
      }
        const Member = message.mentions.members.first();
        if(!Member) return message.channel.send('Please specify a user to ban.');
        if(Member.id == message.author.id){
          return message.channel.send("I cannot Self Ban You");
        }
        if(Member.id == client.user.id){
          return message.channel.send("I cannot ban myself")
        }
        
       var args2 = args.slice(1).join(" ");
        if(!args2)
        {
          var args2 = "No reason provided";
        }
        await Member.ban({ reason : `${args2}`})
        const embed = new Discord.MessageEmbed()
        .setTitle('BAN')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/796744218893746176/816713126245957693/kick.gif')
        .setDescription(`${Member.user.tag} was Banned from the server!`)
        .setTimestamp()


        message.channel.send(embed)
    }
}
}
module.exports.help = {
    name: "ban",
    description: "Bans a member",
    usage: "ban <mention> <reason>",
    type: "Moderation"
}