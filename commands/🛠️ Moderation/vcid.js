    module.exports = {
  name: "vcid",
  aliases: [],
  execute: async(client, message, args, data, db) => {

const id1 = message.member.voice.channel.id;
const id2 = message.member.voice.channel;
message.channel.send(`${id1}`);
await message.channel.send(`Done here is Your Voice Channel id of ${id2}  `);

 }
    }
   module.exports.help = {
    name: "vcid",
    description: "It Gives the devleoper id of the vc you are connected",
    usage: "vcid",
	type: "Moderation"
}