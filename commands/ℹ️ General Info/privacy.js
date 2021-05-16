const Discord = require("discord.js");

     
            module.exports = {
  name: "privacy",
  aliases: ["policy"],
  execute: async(client, message, args, data, db) => {

message.channel.send("Dumb Bot's Privacy Policy\n We do not store any data apart from the Commands Database and if the User Contact us from anywhere his data will be cleared, we do not store any type of personal data. We Follow all Discord's Terms of Service and Community Guidelines.")

  }
            }
            module.exports.help = {
    name: "privacy",
    description: "Read The rivacy Policy Of bot",
    usage: "privacy",
    type: "General"  
}