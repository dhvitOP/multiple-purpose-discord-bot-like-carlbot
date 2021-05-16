const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "github",
  aliases: [],
  execute: async(client, message, args, data, db) => {
  const name = args.join(' ')
        if(!name) return message.reply('Provide A Valid User To Search.') // If User Is Not Found On GitHub
        const url = `https://api.github.com/users/${name}` // Link From BOT Will Get Info

        let response
        try{
            response = await fetch(url).then(res => res.json())
        }
        catch(e) {
            return message.reply('An Error Occured, Try Again Later.')
        }

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${response.login}(${response.id})`)
        .setURL(response.html_url)
        .setThumbnail(response.avatar_url)
        .setDescription(response.bio ? response.bio : 'No Bio') // Bio Of User Searched
        .addField('Public Repositories:-', response.public_repos.toLocaleString()) // Repos Of User Searched
        .addField('Followers:-', response.followers.toLocaleString()) // Followers Of User Searched
        .addField('Following:-', response.following.toLocaleString()) // How Many Following Of User Searched
        .addField('Email:-', response.email ? response.email : 'No Email') // Email Of User Searched
        .addField('Company:-', response.company ? response.commands : 'No Company') // Company Of User Searched
        .addField('Location:-', response.location ? response.location : 'No Location') // Location Of User Searched
        message.channel.send(embed)
    
    }
    
  }

  
