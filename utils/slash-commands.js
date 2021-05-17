	const moment = require('moment');
  const api = require('novelcovid');
  const Discord = require("discord.js");
  const AmeClient = require("amethyste-api");
  const config = require("../config.js");
const commandsrun = async (interaction, client) => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;
       let AmeAPI = new AmeClient(config.imageapi);


const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

 
      
        
        if (command === 'hello'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "hello world!!!"
                    }
                }
            })
        }
        if (command === 'say'){
          let member = interaction.member;
          console.log(member)
          if(args[0].name == "title"){ 
          var title = args[0].value;
          }
          if(args[1]){
           if(args[1].name == "description"){ 
          var description = args[1].value;
          }
          }

          if(args[2]){
            if(args[2].name == "color"){

            
          var colour = args[2].value;
            }
            else {
            var colour = "BLUE";
          }
          
          } 
          else {
            var colour = "BLUE";
          }
          
            const aembed = new Discord.MessageEmbed()
            if(args[0].name == "title"){
            aembed.setTitle(title)
            }
            if(args[1]){
            if(args[1].name == "description")
            {
            aembed.setDescription(description)
            }
            }
        
            aembed.setColor(colour)
         if(args[3] || args[2] || args[1])
         {
           
              if((args[3] && args[3].name == "channel" )|| (args[2] && args[2].name == "channel") || (args[1] && args[1].name == "channel")){
               
            if(args[1])
            var channel = args[1].value;
            if(args[2])
            var channel = args[2].value;
             if(args[3])
            var channel = args[3].value;
            console.log(channel)
            console.log(interaction)
            var guild = interaction.guild_id;
            var guild = client.guilds.cache.get(guild);
            var member2 = guild.members.fetch(interaction.member.user.id);
           
            var member2 = guild.members.cache.get(member.user.id);
            console.log(member2);
             if(member2.hasPermission("MANAGE_GUILD")){
                client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Done Message Sended"
                       
                    }
                }
            })
            var channel = client.channels.cache.get(channel);
            return channel.send(aembed);

             }
              else {
                client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "You dont Have Permission"
                       
                    }
                }
            })
              }
              }
            }
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "",
                        embeds: [aembed]
                    }
                }
            })
        }
            if (command === 'triggered'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("triggered", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.gif");
     
        
           channelsend.send(attachment);
        }
                    if (command === 'scary'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("scary", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
              if (command === '3000yrs'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("3000years", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
          if (command === 'approved'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("approved", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
          if (command === 'butiful'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("beautiful", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
              if (command === 'crush'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("crush", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
              if (command === 'challenger'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("challenger", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
            if (command === 'hope'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("ddungeon", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
         if (command === 'rejected'){ 
          
          if(args){
            var user = client.users.cache.get(args[0].value
 )
          }
          else {
var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
		const buffer = await AmeAPI.generate("rejected", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
              if (command === 'facebook'){ 
          
          if(args[1]){
            var user = client.users.cache.get(args[1].value
 )
          }
          if(!args[1]){
            var user = interaction.member.user.id;
var user = client.users.cache.get(user);
          }
        
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
          var description1 = args[0].value;
		const buffer = await AmeAPI.generate("facebook", { url: user.displayAvatarURL({ format: "png", size: 512 }), text: description1 });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }

          if (command === 'batslap'){ 
          
      
var firstuser = client.users.cache.get(interaction.member.user.id);
var secuser = client.users.cache.get(args[0].value);
   const users = [
   firstuser,
		  secuser
]
          const channel = interaction.channel_id;
          let channelsend = client.channels.cache.get(channel);
           client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Wait For Your Image`
                    }
                }
            })
	var buffer = await AmeAPI.generate("batslap", { avatar: users[0].displayAvatarURL({ format: "png", size: 512 }), url: users[1].displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "itz-scary-when-triggered.png");
     
        
           channelsend.send(attachment);
        }
       if (command === 'invite'){ 
           const inviteembed = new Discord.MessageEmbed()
  .setTitle("Invite ME")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://discord.com/oauth2/authorize?client_id=828959241586606110&scope=bot%20applications.commands&permissions=-9)\n[Invite the bot here (Admin Perm)](https://discord.com/oauth2/authorize?client_id=828959241586606110&scope=bot%20applications.commands&permissions=8)")
  .addField("Support", `[Join to official server](https://discord.gg/sqMXPPcBUD)`)
    .addField("Our Official Bot Website", `[OFFICAL WEBSITE](https://dumb-bot.tk)`)
     .addField(`Vote us Here -`, `[Click Here](https://discordbotlist.com/bots/dumb-bot/upvote)`)
     .addField(`Guide -`, `[Video Guide](https://youtu.be/nylG1ZedhmE)`)
  .setFooter("Bot created by " + `Dumbiess`)
  .setImage(`https://cdn.discordapp.com/attachments/789520293311676436/829675394616524869/standard_1.gif`)
  .setTimestamp()
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Here is my Invite -",
                        embeds: [inviteembed]
                    }
                }
            })
        }
         
        if (command === 'stats'){ 
 const embed = new Discord.MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${client.user.username} stats`)
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        `📂Memory Usage:`,
        (process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB",
        false
      )
      .addField(`🏘Servers Count:`, `${client.guilds.cache.size}`, false)
      .addField(`👥Users Count:`, `${client.users.cache.size}`, false)
      .addField(`Channels Count:`, `${client.channels.cache.size}`, false)
      .addField(`Shards:`, `1`, false)
      .addField(`🗓 Creation Date -`, `6th February 2021`, false)
      .addField(`Made With :`, `Node.js V12 And SQ Lite DataBase And Your Love`, false)
      .addField(`:tools: Developers of This Bot -`, `Dhvit And E-E-3`, false)
      .addField(`⚙➡Prefix : `, `.`, false)
      .addField(`:chart_with_upwards_trend:Uptime:`, duration, false)
    

            await client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "Here is My Stats",
                        embeds:[embed]
                    }
                }
            })
        }
          if (command === 'covid'){ 
              if(!args)
        {
           const countrydata =  await api.all();
           await  client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Covid Stats Of World:\nActive Cases of World: ${countrydata.active}\n Total Cases: ${countrydata.cases}\n Todays Cases: ${countrydata.todayCases}\n Critical Cases: ${countrydata.critical}\n Total Deaths: ${countrydata.deaths}\n Total Recovered: ${countrydata.recovered}`
                    }
                }
            })
            return;
        }
           const countrycovid = args[0].value;
           let continents = ["europe", "asia", "antarctica", "North America", "South America", "Arctic", "Africa"]
           if(countrycovid.includes("europe") || countrycovid.includes("asia") || countrycovid.includes("north america") || countrycovid.includes("south america") || countrycovid.includes("africa") || countrycovid.includes("oceania"))
           {
              const countrydata = await api.continents({continent: countrycovid})
            await  client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `Covid Stats For ${args[0].value}:\nActive Cases of ${args[0].value}: ${countrydata.active}\n Total Cases: ${countrydata.cases}\n Todays Cases: ${countrydata.todayCases}\n Critical Cases: ${countrydata.critical}\n Total Deaths: ${countrydata.deaths}\n Total Recovered: ${countrydata.recovered}`
                    }
                }
            })
            console.log("Continent");
            return;
           }
      
    
       var user2 = interaction.member;
       
     
     
    const data =  await api.countries({country: countrycovid})
       const covidembed = new Discord.MessageEmbed()
         .setTitle(`${args[0].value} Cases`)
    .setDescription("Number of cases may differ from other sources")
    .addField("Cases", data.cases, true)
    .addField("Active", data.active, true)
    .addField("Cases Today", data.todayCases, true)
    .addField("Critical Cases", data.critical, true)
    .addField("Deaths", data.deaths, true)
    .addField("Recovered", data.recovered, true)
    .setFooter(`Requested by ${user2.user.username}`)
    .setTimestamp() 
          await    client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: ``,
                        embeds: [covidembed]
                    }
                }
            })
            
        
          }
         if (command === 'ping'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `API Ping - ${client.ws.ping}`
                    }
                }
            })
        }
           if (command === 'uptime'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: `My Uptime - ${duration}`
                    }
                }
            })
        }
         if (command === 'help'){ 
           const user2 = client.users.cache.get(interaction.member.user.id);
                 const embeding = new Discord.MessageEmbed()
        .setTitle(`📬 Need help? Here are all of my commands:`)



        .addField("**:information_source: BOT CODE INFO**","`dependencies`, `modules`, `servers`, `stats`, `uptime`\n\n**:information_source: GENERAL INFO**\n`djs`, `help`, `invite`, `links`, `ping`, `serverstats`, `vote`\n\n**<:dev:819420051240517663>** **OWNERS**\n`shell`, `control`, `eval`, `usage`\n\n <a:love_Triangle:842268584192376852> **Guessing Games** <a:love_Triangle:842268584192376852>\n `find-words`, `guess-number`, `lovecalc`")


        .addField("**:dolls: AUTOMOD**", "`anti-alt`, `antilink`, `autonick`, `auto-official-role`, `auto-official-role-disable`, `autorole`, `role-all`\n\n**<:laugh:819852535711268865> FUN**\n`afk`, `animesearch`, `ascii`, `baka`, `beep`, `dumb`, `calc`, `cattext`, `dice`, `eightball`, `flipcoin`, `fliptext`, `hack`, `iq`, `joke`, `kill`, `messages`, `poke`, `poll`, `ratewaifu`, `sneeze`, `waifu`, `youtube`, `zalgo`")


        .addField("**:level_slider: LEVELING**", "`rank`\n\n**<:money:835761381008736286> ECONOMY**\n`addmoney`, `balance`, `beg`, `bet`, `buy`, `daily`, `deposit`, `monthly`, `pay`, `profile`, `roulette`, `weekly`, `withdraw`, `work`\n\n**<a:cast:835758300511338516> LOGS**\n`logs-ticket`, `set-logs`, `remove-logs`\n\n**<a:giveaway:835759764934754324> GIVEAWAY**\n`edit`, `list`, `end`, `reroll`, `start`,`create`, `cancel`\n\n**<a:music:835760380512043008> MUSIC**\n`24/7`, `bassboost`, `dc`, `connect`, `lyrics`, `np`, `pause`, `play`, `queue`, `resume`, `shuffle`, `skip`, `stop`, `volume`\n\n**<a:warning:835759241674358794> REPORT**\n`suggest`, `bug-report`\n\n**<a:welcome:835761777144889364> WELCOME AND LEAVE**\n`leave`, `set-welcome`, `set-leave`, `welcome`")


        


        .addField("**:ticket: TICKET**", "`add`, `close`, `delete`, `new`, `open`, `remove`, `setup`\n\n**:performing_arts:REACTION ROLES**\n`reaction-role`, `reaction-role-remove`\n\n**:video_game: GAMES**\n`csgo`, `poke`, `slots`, `tictactoe`\n\n**:frame_photo: IMAGE**\n`3000yr`, `approved`, `batslap`, `beautiful`, `brazzers`, `burn`, `cat`, `challenger`, `cuddle`, `dict`, `distort`, `dog`, `ddungeon`, `facechange`, `fire`, `flatearth`, `foxgirl`, `gay`, `hug`, `kiss`, `love`, `magik`, `meme`, `qrcode`, `randomav`, `rip`, `scary`, `slap`, `triggered`, `tickle`, `tweet`, `vs`, `wanted`")


        .addField("**:tools: MODERATION**", "`announce`, `ban`, `color`, `hide`, `kick`, `lock`, `maintainence`, `nuke`, `prune`, `purge`, `say`, `sendembed`, `serverlock`, `serverunlock`, `set`, `slowmode`, `stealemoji`, `unban`, `unhide`, `unlock`, `vcid`, `voicedeafen`, `voicekick`, `voicemove`, `voicemute`, `voiceundeaf`, `voiceunmute`, `warn`, `warns`\n\n**:shield: SERVER BACKUP**\n`create-backup`, `info-backup`, `load-backup`\n\n**:robot:CHATBOT**\n`remove-channel`, `set-channel`\n\n**:toolbox: UTILITY**\n`avatar`, `covid`, `id`, `members`, `roleid`, `github`, `servericon`, `serverinfo`, `time`, `info`, `weather`\n\n**Invites Manager**\n`invites show`, `invites add`, `invites remove`, `invites reset`, `leaderboard`, `resetallinvites`, `resetInvites`")
        
 .addField("**Dumb Bot Servers List**", "`setup-list`, `remove-list`")
        
        .setFooter(
          `Requested by ${interaction.member.user.username} | Total 170+ Commands`,
          user2.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
     
          
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                         content:  "",
                         embeds: [embeding]
                         
                    }
                }
            })
        }
}
  module.exports = {
    commandsrun
}