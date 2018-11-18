const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`بكى القلم عندما نقل كلماتي، والبشر لا يشعرون بما أنا فيه`,'https://www.twitch.tv/MeeRcY')

});








client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("475727449037209641");
let c = g.channels.get("492968865110687764");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't "text"");
}
});








client.login("NDQyMzQ4MzE3NzM3ODc3NTA0.DoLPHg.A2-HTBxnn1J_6cOlDTgUcmuAqo8");
