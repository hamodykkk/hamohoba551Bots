const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`im So Fucking Rage`,'https://www.twitch.tv/MeeRcY')

});








client.on('message', msg => {

    if (msg.content == '.') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.guilds.get("441998122827120640");
    client.channels.get("505439693999964182").join(); //by : Mohamed
    });








client.login(process.env.BOT_TOKEN);

