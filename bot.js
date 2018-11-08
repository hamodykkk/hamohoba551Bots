const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`مهاب يقول لاتكلم بنات`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
