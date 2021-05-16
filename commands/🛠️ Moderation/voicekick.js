    module.exports = {
  name: "voicekick",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.member.voice.channel;
        for (let member of channel.members) {
            member[1].voice.setChannel(null)
        }
        message.channel.send("Done i have kicked all persons who were in your vc")
  }
    }
  module.exports.help = {
    name: "voicekick",
    description: "It kicks all users who are in vc",
    usage: "voicekick",
	type: "Moderation"
}