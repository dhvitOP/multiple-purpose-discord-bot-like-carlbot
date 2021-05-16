const fetch = require("node-fetch");
const Discord = require("discord.js");
module.exports = {
  name: "bt-check",
  aliases: ["check-bt"],
  execute: async(client, message, args) => {

var requestOptions = {
  method: 'GET', // Choose the appropriate method
  headers: {
    "authorization": "VOID_jMEDa9AFbx59QrwSxL9eoxkLqXZdSqAqfjwiUmymq8ewovMs",
    "Content-Type": "application/json"
  }

};
let embed = new Discord.MessageEmbed()
.setDescription("Breh Testing")
fetch("https://api.voidbots.net/bot/analytics/828959241586606110", requestOptions) // Check the table above for url
  .then(response => response.text())
  .then(console.log)
    }

  }
