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
    client.channels.get("492968865110687764").join(); //by : iBeAnthonyD
    });








client.login("NDQyMzQ4MzE3NzM3ODc3NTA0.DoLPHg.A2-HTBxnn1J_6cOlDTgUcmuAqo8");
