const db = require("quick.db")
const discord = require("discord.js")
require('discord-reply')

module.exports = {
  name: "status",
  execute: async (client, message, args) => {
    
  if(message.author.id == "720632216236851260" || message.author.id == "780029934163722280") { 
    //ARGUMENT
    if(!args.length) {
      return message.lineReply("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.lineReply("Updated the bot status")
  }
    
  }
}