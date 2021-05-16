  
const backup = require('discord-backup');
const config = require('../../config.js');


module.exports = {
  name: "create-backup",
  aliases: ["backup-create"],
  execute: async(client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('Administrator')){
        return message.channel.send(' You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild, {
    maxMessagesPerChannel: 0,
    jsonSave: false,
    jsonBeautify: true,
    doNotBackup: [],
    saveImages: "url"
}).then((backupData) => {
          message.channel.send("Done Check Your Dmes")
        return message.author.send('Backup created! Here is your ID: `'+backupData.id+'`! Use `'+config.prefix+'load-backup '+backupData.id+'` to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });

}}
module.exports.help = {
    name: "create-backup",
    description: "To create backup of your current server",
    usage: "create-backup",
    type: "Giveaway"  
}