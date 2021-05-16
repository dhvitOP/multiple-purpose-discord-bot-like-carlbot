const {ShardingManager} = require("discord.js");
const config = require("./config.js")

const shards = new ShardingManager("./xp.js", {
    token: config.token,
      totalShards: 'auto'

});
shards.spawn();
shards.on("shardCreate", shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
});


