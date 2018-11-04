const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`وغآب ذاك الي وعندي م يخليني`,'https://www.twitch.tv/MeeRcY')

});






client.login(process.env.BOT_TOKEN);
