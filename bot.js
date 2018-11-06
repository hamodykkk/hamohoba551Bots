const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`لَن يحزنني شيء فكل ما بداخلي مات`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
