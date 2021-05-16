const ms = require('ms');

module.exports = {
  name: "gdelete",
  aliases: ["gcancel", "gdelete"],
  execute: async(client, message, args) => {


  // If the member doesn't have enough permissions
     if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "You need `MANAGE GUILD` to Access this Command!"
      );
      return;
}


    if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("✅ Giveaway deleted!");
        }).catch((err) => {
            message.channel.send(":x: No giveaway found for \`${messageID}\`, please check you have the right message and try again.");
        });
}}
module.exports.help = {
    name: "gdelete",
    description: "It will delete the Giveaway",
    usage: "gdelete <message_id>",
    type: "Giveaway"  
}