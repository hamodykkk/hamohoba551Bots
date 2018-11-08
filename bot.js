const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`قلوب الناس ليست الجنة فلا تتعب نفسك من أجل البقاء فيها`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
