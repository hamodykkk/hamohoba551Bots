const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`آحيانا يكفي أن نعرف انهم بخير لا أكثر`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
