const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`أحياناً تبكي ولا تدري ما القصة غير أنك تعبت من كل شئ`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
