const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور اضافية 
   var s = ['483055660209012736','480169573530861578','483055655800930315']; // الصور الي بتشتغل
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'الموت',
    application_id: '568803607663738890', // ايدي البوت او ايدي الحساب
      assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NDM2OTE4MTIwMTg0MDIxMDEy.XKuYUg.cYn3o4H3vD4R2Fz2NDniZ8kiovU");
