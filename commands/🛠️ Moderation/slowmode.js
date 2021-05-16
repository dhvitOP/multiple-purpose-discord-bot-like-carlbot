




module.exports = {
  name: "slowmode",
  aliases: [],
  execute: async(client, message, args, data, db) => {
   
  
 if (!message.member.hasPermission("UNMUTE_MEMBERS"))
     {
      return;
    }
  let channel = message.channel;
   const vc1 = args.join(" ");
   const member = message.member;
  channel.setRateLimitPerUser(vc1, `Responsible - ${member}`);
        message.channel.send(`Done i have slowmode this channel to ${vc1}s to ${channel}`)
  }
}
  module.exports.help = {
    name: "slowmode",
    description: "It Changes the slowmode of current channel",
    usage: "slowmode <SECONDS>",
	type: "Moderation"
}

