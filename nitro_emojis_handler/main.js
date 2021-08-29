const Timeout = new Map();
module.exports = async (client, message, db) => {
  let checking = db.fetch(`nitroemoji_${message.guild.id}`)
  if(checking == true) 
  {
    let msg = message.content;

  let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
  if (!emojis) return;
            const timeout = 5000;
   const key = message.author.id;
   const found = Timeout.get(key);
   if(found) {
    const timePassed = Date.now() - found;
    const timeLeft = timeout - timePassed;
    return message.lineReply({embed: {
     color: 16734039,
     description: ` ❌ | ${message.author} slow down! You have to wait \`${ms(timeLeft)}\` before you can use this bot Emojis again!`
    }});
     } else {
      
        Timeout.set(key, Date.now());
    setTimeout(() => {
     Timeout.delete(key);
    }, timeout);
    }
    
     
    
     emojis.forEach(m => {
    let emoji = client.emojis.cache.find(x => x.name === m)
    if (!emoji) return;
    let temp = emoji.toString()
    if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
    else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString());
  })

  if (msg === message.content) return;

  let webhook = await message.channel.fetchWebhooks();
  let number = randomNumber(1, 2);
  webhook = webhook.find(x => x.name === "Dumb Bot Emojis" + number);

  if (!webhook) {
    webhook = await message.channel.createWebhook(`Dumb Bot Emojis` + number, {
      avatar: client.user.displayAvatarURL({ dynamic: true })
    });
  }

  await webhook.edit({
    name: message.member.nickname ? message.member.nickname : message.author.username,
    avatar: message.author.displayAvatarURL({ dynamic: true })
  })

  message.delete().catch(err => { })
  webhook.send(msg).catch(err => { })

  await webhook.edit({
    name: `Dumb Bot Emojis` + number,
    avatar: client.user.displayAvatarURL({ dynamic: true })
  })
    }
}
function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
