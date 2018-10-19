const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs'); 

 

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

console.log('         [Wait please .. ]       ')

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

client.on('ready', () => {

    console.log('')

    console.log('')

    console.log('')

    console.log('')

    console.log('')

    console.log('')

    console.log('')

    console.log('')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`Logged in as [ ${client.user.tag}! ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log('[           BOT IS ONLINE         ]')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log('[        info         ]')

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

});

 

 

 

 

client.on('ready', () => {

  client.user.setGame(`Mo Salah™`,'https://www.twitch.tv/v5bz');

});

 

 

let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));

client.on('message', message => {

    if (!points[message.author.id]) points[message.author.id] = {points : 0}

    if (message.content == 'نقاطي'){

        var embed = new Discord.RichEmbed()

        .setAuthor(message.author.username,message.author.avatarURL)

        .addField(`نقاطك : ${points[message.author.id].points}`,'Mo Salah™',   true) 

        .setColor('RANDOM')

        .setFooter('Games', client.user.avatarURL);

        message.channel.sendEmbed(embed)

    };

    if (message.content == "فكك") {    

        var x = ['السلام عليكم ورحمة الله وبركاتة', 'طيارة', 'محمد صلاح', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'سن' , 'استعن بالله' , 'عدل' , 'جميل جمال' , 'الفراعنة' , 'المالديف'];

        var x2 = ['ا ل س ل ا م ع ل ي ك م و ر ح م ة ا ل ل ه و ب ر ك ا ت ة', 'ط ي ا ر ة', 'م ح م د ص ل ا ح', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'س ن', 'ا س ت ع ن ب ا ل ل ه', 'ع د ل', 'ج م ي ل ج م ا ل', 'ا ل ف ر ا ع ن ة', 'ا ل م ا ل د ي ف'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(` نوع اللعبة : فكك

فكك الكلمة الآتية :   【 ${x[x3]} 】

الوقت : 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('لم يقم احد بتفكيك الكلمة في الوقت المناسب')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> { 

 

        points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : 【 ${points[message.author.id].points } 】`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

        if (message.content == "ركب") {    

        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ر و ق ن'];

        var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'روقن'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`نوع اللعبة : ركب 

ركب الأحرف الآتية : 【 ${x[x3]} 】 

الوقت : 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('لم يقم احد بتركيب الحروف في الوقت المناسب')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

 

            points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : ⇤ ${points[message.author.id].points } ⇥`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

        if (message.content == "احسب") {    

        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44.5+44.5', '3500 ÷ 385', '3500 ÷ 588'];

        var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89' , '9' , '5'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`نوع اللعبة : احسب

احسب اأرقام الآتية : 【 ${x[x3]} 】 

الوقت : 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('لم يقم احد بالعملية الحسابية الصحيحة')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

 

            points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : ⇤ ${points[message.author.id].points } ⇥`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

   

  if (message.content == "عواصم") {

        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];

        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`نوع اللعبة : عواصم

ماهي عاصمة : 【 ${x[x3]} 】 

الوقت : 15 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 15000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('لم يقم احد بكتابة العاصمة الصحيحة في الوقت المناسب')

               message.channel.sendEmbed(embed)

        })

        r.then(s=> {

 

            points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : ⇤ ${points[message.author.id].points } ⇥`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

    if (message.content == "لغز") {

        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];

        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`نوع اللعبة : الغاز

حل اللغز لآتي : 【 ${x[x3]} 】 

الوقت : 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('لم يقم احد بحل اللغز في الوقت المناسب')

               message.channel.sendEmbed(embed)

        })

        r.then(s=> {

 

            points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : ⇤ ${points[message.author.id].points } ⇥`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

  if (message.content == "رتب") {    

        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];

        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`نوع اللعبة : رتب

رتب الأحرف لآتية  : 【 ${x[x3]} 】 

الوقت : 25 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 25000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send(' لم يقم احد بترتيب الحروف في الوقت المناسب')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

 

            points[message.author.id].points +=1

            message.channel.send(`${message.author} : صاحب الإجابة 

☻ لقد قمت بكتابة الجواب الصحيح ☻

نقاطك : ⇤ ${points[message.author.id].points } ⇥`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

    });

 

   

    



   

   

   

   

   

    client.on("message", message => {

 if (message.content === "العاب") {

  const embed = new Discord.RichEmbed()

      .setColor("RANDOM")

      .setDescription(` ✧▬▬▬▬▬ BOT Games ▬▬▬▬▬✧

 

قم بتفكيك الجمل  ➼ فكك

 

قم بتركيب الجمل  ➼ ركب

 

قم بحل المسائل الرياضية  ➼ احسب

 

قم بأيجاد العواصم المطلوبة ➼ عواصم

 

قم بحل الألغاز ➼ لغز

 

قم بتجميع الحروف ➼ رتب

 

لعرض النقاط الخاصة بك ➼ نقاطي

 

 ✧▬▬▬▬▬ BOT Games ▬▬▬▬▬✧`)

 .setFooter("By : { Mo Salah } ")

   message.channel.sendEmbed(embed)

   

   }

   });



    

client.login(process.env.BOT_TOKEN)
