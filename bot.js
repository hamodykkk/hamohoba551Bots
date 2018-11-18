const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`بكى القلم عندما نقل كلماتي، والبشر لا يشعرون بما أنا فيه`,'https://www.twitch.tv/MeeRcY')

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
    client.guilds.get("475727449037209641");
    client.channels.get("513679094504751105").join(); //by : iBeAnthonyD
    });








client.login("NDcwODI0NjA5NjA5MTU0NTcx.DoLRPw.YBXm9FoaIyZA54K-eFt12gQ3UXg");
