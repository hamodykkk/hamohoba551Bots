const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`عاوز تعيش صح خليك غبي بطريقة ذكية`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
