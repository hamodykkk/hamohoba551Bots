const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`حديثهم شئ وحقيقتهم شئ أخر`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
