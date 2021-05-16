const Discord = require("discord.js");
const { Message } = require("discord.js");
const fs = require("fs");

module.exports = async (client, message) => {
    
    client.user.setActivity(`Your Commands!!! | .help FOr My Commands | Also Watching ${client.guilds.cache.size} Servers`, { type : "WATCHING" });
   
      client.ws.on('INTERACTION_CREATE', async (interaction) => {
   client.slash.commandsrun(interaction, client);
  
    })          
             
              let channel = client.channels.cache.get("832304800204062760")   
  channel.send(" RESTARING EVERYTHING | UPDATING 🌀").then((msg) => {
    setTimeout(function() {
    msg.edit('EVERYTHING UPDATED SUCCESSFULLY | BOT STATUS ONLINE <:connected:842769316285513738>');
  }, 7000)})
  console.log("THE BOT IS READY TO USE")
 

   
}