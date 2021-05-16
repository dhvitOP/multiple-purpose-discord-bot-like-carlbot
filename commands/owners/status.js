const db = require("quick.db")
const discord = require("discord.js")
require('discord-reply')

module.exports = {
  name: "status",
  description: "Change the bot status",
  usage: "status <here>",
  category: "owner",
  ownerOnly: true,
  execute: async (client, message, args) => {
    
  
    //ARGUMENT
    if(!args.length) {
      return message.lineReply("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.lineReply("Updated the bot status")

    
  }
}