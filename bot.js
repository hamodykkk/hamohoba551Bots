const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`ثم أضحك , أضحك طويلاً وأقول كانت أحزاني تافهة`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
