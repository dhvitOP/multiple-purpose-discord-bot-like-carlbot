    module.exports = {
  name: "voicemove",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
   var prefix = db.fetch(`guildprefix_${message.guild.id}`);
   if(!prefix)
   {
     var prefix = ".";
   }
 if (!message.member.hasPermission("MOVE_MEMBERS"))
     {
      return;
    }
    let args1 = args.join(" ");
    if(!args1)
    {
      message.channel.send("You didnt gave me vc developer id do join the voice channel you wanna drag and do $prefix}vcid after it")
    }
   
   const vc1 = args1;
  const channel = message.member.voice.channel;
   for (let member of channel.members) {
            member[1].voice.setChannel(vc1)
        }
message.channel.send(`DONE I HAVE MOVED ALL USERS TO <@#${args1}>`);
  }
  
  
  }
  
  module.exports.help = {
    name: "voicemove",
    description: "It moves all users who are in vc",
    usage: "voicemove <vc_developer_id>",
	type: "Moderation"
}
