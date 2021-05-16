const Discord = require('discord.js');
var request = require('request');
var cheerio = require('cheerio');

function getStatData(location , $){
    var selector = $('.segment-stats .value').eq(location).text();
    var stat_array = $.parseHTML(selector);
    var stat = 0;

    if(stat_array == null || stat_array.lengh == 0){
        return -1;
    }else{
        stat = stat_array[0].data;
    }

    return stat;
}  
       module.exports = {
  name: "csgo",
  aliases: ["cs"],
  execute: async(client, message, args) => {
    var UR_L = "https://tracker.gg/csgo/profile/steam/" + args[0] + "/overview";

    if(!args[0]){
        return message.channel.send("Please Enter a valid STEAMID64");
    }

    request(UR_L, function(err, resp, body){
        $ = cheerio.load(body);

        var KD = getStatData(0, $);
        if(KD == -1){
            return message.channel.send("Invalid, make sure your profile is not private and you have entered a valid STEAMID64!");
        }

        var KILLS = getStatData(1, $);
        var WIN = getStatData(2, $);
        var MVP = getStatData(3, $);
        var HS = getStatData(4, $);
        var DEATHS = getStatData(5, $);
        var SCORE = getStatData(8, $);
        var MONEY = getStatData(9, $);
        var BS = getStatData(12, $);
        var BD = getStatData(13, $);
        var HR = getStatData(14, $);

        var embed = new Discord.MessageEmbed()
            .setTitle("__***CSGO Stats***__")
            .setURL(UR_L)
            .addField("Current stats",
            "Total KD: " + "__**" + KD + "**__" + "\n" +
            "Total Win%: " + "__**" + WIN + "**__" + "\n" +
            "Total MVPs: " + "__**" + MVP + "**__" + "\n" +
            "Total Score: " + "__**" + SCORE + "**__" + "\n" +
            "Total Kills: " + "__**" + KILLS + "**__" + "\n" +
            "Total Deaths: " + "__**" + DEATHS + "**__" + "\n" +
            "Total Bombs Set: " + "__**" + BS + "**__" + "\n" +
            "Total Bombs Defused: " + "__**" + BD + "**__" + "\n" +
            "Total Headshots: " + "__**" + HS + "**__" + "\n" +
            "Total Money Earned: " + "__**" + MONEY + "**__" + "\n" +
            "Total Hostages Rescued: " + "__**" + HR + "**__", true)
            .addField("Powered by:", `**[tracker.gg/csgo](http://tracker.gg/csgo)**`, false)
            .setTimestamp()
            .setColor("0x#FF0000");

        message.channel.send(embed);
    })
}
       }
       module.exports.help = {
    name: "csgo",
    description: "Gives stats of csgo player",
    usage: "csgo <steamID>",
    type: "Fun" 
}