const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`): الشعب العربي لا يتقدم إلا في السن`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
