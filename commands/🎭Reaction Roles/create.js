
   module.exports = {
  name: "reaction-role",
  aliases: ["rr", "reactionrole"],
  execute: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR"))
{
  return;
} 
    if(!args[0])
    {
      return message.reply("You Didnt Give me an emoji Here is order to do - ${prefix}rr 🎉 6969696969 @Giveaway-Ping/69696969\n So First is Emoji to add\n Second is Message-id to add\n Third is Role To Ping or Enter Role ID");
    }
    if(!args[1])
    {
      return message.reply("You Didnt Give me a Message ID to add this You can send An embed Message By Bot only And add Reaction role to it");
    }
  var role2 = message.mentions.roles.first();
  

if(!role2)
{
  var role2 = args[2];
  var role2 = message.guild.roles.cache.get(role2);
  console.log("not mentioned");
}

if(!role2)
{
  return message.reply("You Didnt Gave me a role");
}
client.reactionRoleManager.create({
      messageID: args[1],
      channel: message.channel,
      reaction: args[0],
      role: role2
})
message.channel.send(`Done It will take sometime to Add your server in database Please wait`);
 await message.delete();

return;
}}
  