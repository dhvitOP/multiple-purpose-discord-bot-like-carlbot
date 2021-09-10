<<<<<<< HEAD
const ms = require('ms');

module.exports = {
  name: "edit",
  aliases: ["gedit"],
  execute: async(client, message, args) => {

 
=======
const ms = require('ms');

module.exports = {
  name: "edit",
  aliases: ["gedit"],
  execute: async(client, message, args) => {

 
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
     // If the member doesn't have enough permissions
        if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        "You need `MANAGE GUILD` to Access this Command!"
      );
      return;
}

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: You have to specify a valid message ID!');
    }

    // If no field to edit is specifed
    if(!args[1]){
        return message.channel.send(':x: You need to either edit the prize or the winners!');
    }

    if(args[1] === 'prize'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send(':x: You have to provide a new prize!');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ The giveaway prize will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else
    if(args[1] === 'winners'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send(':x: You have to specify a valid number of winners!');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            // here, we can calculate the time after which we are sure that the lib will update the giveaway
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('✅ The giveaway winner count will updated in less than ' + numberOfSecondsMax + ' seconds.');
        }).catch((err) => {
            message.channel.send(`:x: No giveaway found for \`${args[0]}\`, please check you have the right message and try again.`);
        });
    }else{
        return message.channel.send(':x: You need to either edit the prize or the winners!');
<<<<<<< HEAD
    }
=======
    }
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
}
}
module.exports.help = {
    name: "edit",
    description: "To edit the giveaway",
    usage: "edit <message_id> <to chnage things>",
    type: "Giveaway"  
}