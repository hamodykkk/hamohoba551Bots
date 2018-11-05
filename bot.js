const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`السعادة أن تجد روح تشبه روحك كثيراً`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
