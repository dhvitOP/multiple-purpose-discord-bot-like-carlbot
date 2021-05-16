const api = require('novelcovid');
	const moment = require('moment');
	const { CanvasRenderService } = require('chartjs-node-canvas');
  const Discord = require("discord.js");
module.exports = {
  name: "covid",
  aliases: [],
  execute: async(client, message, args) => {
    if(!args[0])
    {
     const coronaEmbed = new Discord.MessageEmbed()
    const data = await api.all()
    coronaEmbed.setColor('#00B2B2')
    .setTitle("🌐 Global Cases")
    .setDescription("Number of cases may differ from other sources")
    .addField("Cases", data.cases, true)
    .addField("Active", data.active, true)
    .addField("Cases Today", data.todayCases, true)
    .addField("Critical Cases", data.critical, true)
    .addField("Deaths", data.deaths, true)
    .addField("Recovered", data.recovered, true)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    message.channel.send(coronaEmbed);
    } else {
      if(args[0]){
     
        const countrycovid = args.join(" ");
    const countrydata = await api.countries({country: countrycovid})

    
    const countryEmbed = new Discord.MessageEmbed()
    .setColor('#00B2B2')
    .setTitle(`${countrycovid} cases`).setThumbnail(countrydata.countryInfo.flag)

    .setDescription("Number of cases may differ from other sources")
    .addField("Cases", countrydata.cases, true)
    .addField("Active", countrydata.active, true)
    .addField("Cases Today", countrydata.todayCases, true)
    .addField("Critical Cases", countrydata.critical, true)
    .addField("Deaths", countrydata.deaths, true)
    .addField("Recovered", countrydata.recovered, true)
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
    .setTimestamp()
    message.channel.send(countryEmbed)
   
    
        
      }
    }
}
}