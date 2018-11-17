const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {

    client.user.setGame(`بكى القلم عندما نقل كلماتي، والبشر لا يشعرون بما أنا فيه`,'https://www.twitch.tv/MeeRcY')

});








client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("441998122827120640");
let c = g.channels.get("501836835358769162");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});








client.login(process.env.BOT_TOKEN);
