const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`ilove you Yazeed`,'https://www.twitch.tv/MeeRcY')

});






client.on("message", function(message) {
    if(message.content.startsWith("ادخل الروم")) {
       client.channels.get("505439693999964182").join()
    }
});








client.login(process.env.BOT_TOKEN);
