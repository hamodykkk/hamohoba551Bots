const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {


  const adminprefix = "";
const devs = ['361217658190036999'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'mo')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير الحاله الي  : ${argresult}**`)
}
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

