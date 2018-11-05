const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`من مميزات البنت القصيرة لو وقع تلفونها ما بتكسر`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
