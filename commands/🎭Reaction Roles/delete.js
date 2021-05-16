
   module.exports = {
  name: "reaction-role-remove",
  aliases: ["reactionrole-remove"],
  execute: async(client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR"))
{
  return;
} 
    if(!args[0])
    {
      return message.reply("Please Give me MessageID");
    }
    if(!args[1])
    {
      return message.reply("PLease Give me an emoji to remove that reaction");
    }
client.reactionRoleManager.delete({
          messageID: args[0],
          reaction: args[1],
        });
message.channel.send(`Done deleted the reaction roles`);
 

return;
}}
  