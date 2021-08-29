const Discord = require("discord.js");
const path = require('path')
const { Collection, Client, Message } = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const db = require("quick.db");
const newUsers = new Discord.Collection();
var botMembers = 0;
const ytdl = require('ytdl-core');
const search = require('youtube-search');
const queue = new Map();
const config1 = require('./utils/gw-config.json');

const client = new Discord.Client({ fetchAllMembers: true, messageCacheMaxSize: 5 });
client.slash = require("./utils/slash-commands.js");
module.exports = client;
const http = require("http");
console.log("\nLoading...");
console.log("If This Take Too long make sure u have add right token!");
const api = require('novelcovid');
	const moment = require('moment');
client.config = config1;
const config = require("./config.js");
const AmeClient = require("amethyste-api");
 client.util = require('./utils/chat-bot-main.js');
const { mainprefix, token, color } = require("./config.js");
const yaml = require("js-yaml");
const chalk = require("chalk");
client.config = config;
const { rejects } = require('assert')
const { join } = require("path");
const { readdirSync } = require("fs");







// TypeScript: import interactions from "discord-slash-commands-client";


// will create a new command and log its data. If a command with this name already exist will that be overwritten.

client.on('ready', () => {
   var arrayOfStatus = [
        `${client.users.cache.size} users`,//change this with your status
        `.help for my help!`,//change this with your status
        `${client.guilds.cache.size} Servers!!`,
        `https://www.dumb-dsc.tk/`,
        `waiting for verification ☹️`,
        `${db.fetch(`status`)}`
    ];
     setInterval(() => {
        var arrayOfStatus = [
        `${client.users.cache.size} users`,//change this with your status
        `.help for my help!`,//change this with your status
        `${client.guilds.cache.size} Servers!!`,
        `https://www.dumb-dsc.tk/`,
        `waiting for verification ☹️`,
        `${db.fetch(`status`)}`
    ];
    }, 60000)
  
let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status);
        index++;
    }, 10000)
   

        console.log(`logged in as ${client.user.username} BOT ✅`)
   const clientDetail = {
     guilds: client.guilds.cache.size,
     users: client.users.cache.size,
     channels: client.channels.cache.size
   };
   
    //express

      
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
             


const PORT = 3000 || 3001;

           

               

      app.use(bodyParser.json())
      app.post("/voted", (req, res) => {
  console.log(req.body) // Logs what is posted to this endpoint

  // You may delete the following 4 lines if you did not use a webhook "password" or "authorization"
  // Below replace "WEBHOOKtokenHere" to the webhook "password" that you set
  if (req.header('Authorization') != "indufing$$%(*#%$^$^$^#)#$%$^(BRUHXDINDIAOPYEA THATS WHY XD NO U FUCK") {
    return res.status("401").end(); // Return 401: Unauthorized
  }
  const cchannel = client.channels.cache.get("842749074427215882");
  // Write some code that will do something for a user that votes
  const cembed = new Discord.MessageEmbed()
  .setTitle("A Vote For Bot is Done on Void Bots")
  .setDescription("Here is Details:")
  .addField("Voter:", `<@${req.body.user}> has Voted Our Bot`)
  
  cchannel.send(cembed);



  res.status(200).end() // Responds to the post request
})


// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
    

})


client.on("message", async message => {
  let startemojis = require("./nitro_emojis_handler/main.js")
  startemojis(client, message, db)
})

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 


const { GiveawaysManager } = require("discord-giveaways");

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./json db/giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: config1.botsCanWin,
        embedColor: config1.embedColor,
        embedColorEnd: config1.embedColorEnd,
        reaction: config1.reaction
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    if (member.id !== client.user.id){
        console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
    }
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    if (member.id !== client.user.id){
        console.log(`${member.user.tag} left giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
    }
});
client.on("guildMemberAdd", async (member) => {
 const { loadImage, createCanvas, registerFont } = require('canvas');
const wlcmimg = "./images/banner.jpg" // Add your own image. This is just for an example

const canvas = createCanvas(1024, 500);
  const ctx = canvas.getContext('2d');

  registerFont('./utils/Uni-Sans.ttf', { family: 'Uni-Sans', weight: 500 });

  const pfp = await loadImage(
    member.user.displayAvatarURL({
      format: 'png',
    })
  )

  const background = await loadImage(wlcmimg);
  let x = 0
  let y = 0
  ctx.drawImage(background, x, y, 1024, 500)

  x = canvas.width / 2 - 125;
  y = canvas.height / 2 - 200;
  ctx.beginPath();
  ctx.save();
  ctx.arc(canvas.width / 2, canvas.height / 2 - 75, 125, 0, Math.PI * 2);
  ctx.strokeStyle = '#400080';
  ctx.lineWidth = 15;
  ctx.stroke();
  ctx.clip();
  ctx.drawImage(pfp, x, y, 250, 250);
  ctx.restore();


  ctx.font = "85px Uni-Sans";
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.shadowColor = "black"
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0; // integer
  ctx.shadowBlur = 10; // integer
  ctx.fillText("WELCOME", 308, 380);

  ctx.font = "40px Uni-Sans";
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
  ctx.fillText(member.user.tag, 360, 430);
  
   let channel = db.fetch(`ichannel_${member.guild.id}`)
 if(!channel)
 {
   return;
 }
 var message1 = db.fetch(`message123_${member.guild.id}`)
  let channel1 = await client.channels.fetch(`${channel}`);
 if(!message1 || message1 == "default")
 {
 var embed = new Discord.MessageEmbed()
.setDescription(`${member} Just Join This server!!`)
.addField(`A User Just Landed In this server!!`, `Welcome To this Server ${member} I hope You enjoy here`)
.addField("Now this server members are -", `${member.guild.memberCount}`)
.setColor(`RANDOM`)
channel1.send(embed);

 }
 if(message1 == "disable")
 {
   return;
 }
 if(message1 && message1 != "default")
 {
   let onoroff = db.fetch(`message459_${member.guild.id}`);
    if(onoroff == "on")
    {
        message1 = message1
    .replace("-member-", `${member}`)
    .replace("-memberscount-", `${member.guild.memberCount}`);
    const welcomeembed = new Discord.MessageEmbed()
    .setDescription(message1)
   channel1.send(welcomeembed)
   return;
    }
  
    
    message1 = message1
    .replace("-member-", `${member}`)
    .replace("-memberscount-", `${member.guild.memberCount}`);
   channel1.send(`${message1}`)
 }
  
 
 
let image8 = db.fetch(`image3_${member.guild.id}`);
if(image8 == "enable")
  {
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "facepalm.png");
  channel1.send(attachment);
  }


 
  }
  
);
client.on("guildMemberRemove", async (member) => {
  const Discord = require("discord.js");
  const db = require("quick.db");

 let channel = db.fetch(`leavechannel_${member.guild.id}`);
 if(!channel)
 {
 
   return;
 }
 let channel1 = await client.channels.fetch(`${channel}`);
 var message1 = db.fetch(`message1234_${member.guild.id}`);
  
 if(!message1 || message1 == "default")
 {
 var embed = new Discord.MessageEmbed()
.setTitle("Someone Just Left The server")
.setDescription(`${member} Just Left This server <:dumb_sad:830714053475303444>`)
.addField(`Now We are of`, `${member.guild.memberCount} Members`)
.setColor(`RANDOM`)
channel1.send(embed)
 }
 if(message1 == "disable")
 {
   return;
 }
 if(message1 && message1 !== "default")
 {
    var onoroff = db.fetch(`message45_${member.guild.id}`);
    if(onoroff == "on")
    {
      message1 = message1
    .replace("-member-", `${member}`)
    .replace("-memberscount-", `${member.guild.memberCount}`);
    const welcomeembed = new Discord.MessageEmbed()
    .setDescription(message1)
   channel1.send(welcomeembed)
   return;
    }
    
    
    message1 = message1
    .replace("-member-", `${member}`)
    .replace("-memberscount-", `${member.guild.memberCount}`);
   channel1.send(`${message1}`)
 }
  
 

  }
);

  

  
client.on("guildMemberAdd", async (member) => {
let autor = db.fetch(`autorole_${member.guild.id}`);
if(!autor)
{
  return;
}
var role = member.guild.roles.cache.get(`${autor}`);
member.roles.add(role);



});
const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 5,// only user who has less than 2 days ages will got kick
    options: "kick"
});
client.on("guildMemberAdd", async (member) => {
let antialt = db.fetch(`antialt_${member.guild.id}`);
if(antialt == "disable" || !antialt || antialt == null)
{

  return;
}

            

 let play = account.run(member);

 

});

client.on("guildMemberAdd", async (member) => {

let message2 = db.fetch(`nickm_${member.guild.id}`);
if(!message2)
{
  return;
}

   message2 = message2
    .replace("-username-", `${member.user.username}`);
   member.setNickname(message2);

});
client.on("guildMemberAdd", async (member) => {
   
        
            if(db.has(`tagg_${member.guild.id}`) && db.has(`tagn_${member.guild.id}`)) 
        {
          let name = db.fetch(`tagn_${member.guild.id}`);
          let hash = db.fetch(`tagg_${member.guild.id}`);
            if(member.user.username.includes(name))
   {
    member.roles.add(hash);
   }
        }
})

  
 
 

client.queue = new Map()



const ms = require("parse-ms");




const ReactionRoleManager = require("discord-reaction-role");
// Starts updating currents reaction roles
const manager1 = new ReactionRoleManager(client, {
    storage: "./json db/reaction-role.json"
});
// We now have a reactionRoleManager property to access the manager everywhere!
client.reactionRoleManager = manager1;
client.reactionRoleManager.on('reactionRoleAdded',(reactionRole,member,role,reaction) => {
  console.log(`${member.user.username} added his reaction \`${reaction}\` and won the role : ${role.name}`);
})

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
     console.log(`[Event Load] loading Event ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});


 


if(config.registercommands === true) {
async function registerSlashCommands(dir) {;
    fs.readdir(path.join(__dirname, dir), async (err, files) => {
        if(err){
            return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
        };
        files.forEach(async (file) => {
            fs.stat(path.join(__dirname, dir, file), (err, stat) => {
                if(err) return console.log(chalk.red('An error occured when checking the commands folder for commands to load: ' + err));
                if(stat.isDirectory()) {
                    registerSlashCommands(path.join(dir, file));
                } else {
                    if(!file.endsWith('.js')) return;
                    let commandFile = require(path.join(__dirname, dir, file));
                    slashCommandList.push({
                        run: commandFile.slashCommand,
                        name: file.split('.')[0]
                    });
                };
            });
        });
    });
};
registerSlashCommands('./commands/');
}
client.login(config.token);
