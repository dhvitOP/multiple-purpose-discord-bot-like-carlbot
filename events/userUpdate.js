const Discord = require('discord.js');
const config = require("../config");
const db = require("quick.db")
module.exports = async (client, oldUser, newUser, member) => {
  let oldMember = oldUser;
  let newMember = newUser;
   if (oldMember.username !== newMember.username) {
   if (oldMember.username === null) {
    var oldNM = "``???? ??????``";
   } else {
    var oldNM = oldMember.username;
   }
   if (newMember.username === null) {
    var newNM = "``???? ??????``";
   } else {
    var newNM = newMember.username;
   }
  
   client.guilds.cache.forEach(guild => {
           
      
        if(guild.member(newUser.id))
        {
            if(db.has(`tagg_${guild.id}`) && db.has(`tagn_${guild.id}`)) 
        {
          let name = db.fetch(`tagn_${guild.id}`);
          var hash = db.fetch(`tagg_${guild.id}`);
            if(newUser.username.includes(name))
   {
     var hash = guild.roles.cache.get(hash);
     let member2 = guild.member(newUser.id);
    member2.roles.add(hash);
     const log = guild.channels.cache.find(log => log.name === "dumb-logs")
  if(!log) return;
  if(log.type !== "text") return;
  const embed = new Discord.MessageEmbed()
   .setTitle("OFFICIAL ROLE ADDED")
   .setDescription(`Added Officials role to ${newUser.username}`)
   .addField(`Added Officials role to ${newUser.username} Bcz of autoofficial/anf command You can disable it by doing .autoofficial-disable/.anf-disable`)
  log.send(embed);
   }
     else if(!newUser.username.includes(name))
   {
     var hash = guild.roles.cache.get(hash);
   
     let member2 = guild.member(newUser.id);
     member2.roles.remove(hash);
   }
        }
    
        
              
          
 

   
        }
        
        
   });
 
  }
}