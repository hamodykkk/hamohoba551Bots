const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`في ناس زي اللبانة في البداية بكونو حلوين وبعداك بمسخو `,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
