const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`لو البلد دي فيها خير ما كان ربطو كوز الموية بالزير`,'https://www.twitch.tv/MeeRcY')

});









client.login(process.env.BOT_TOKEN);
