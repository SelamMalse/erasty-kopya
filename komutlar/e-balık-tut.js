const Discord = require('discord.js')
const client = new Discord.Client();
exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'balık-tut', 
    description: '',
    usage: ''
}
exports.run = (client, message) => {
             message.channel.send('Balık tuttun balığı çekiyorsun.').then(message => {
   var baliklar = ['``Sazan tuttun!`` 🐟' ,'``Köpek balığı tuttun iyi para eder. Sat sat!`` :D' ,'``Uskumru tuttun!`` 🐟' ,'``Mezgit tuttun! Havyarıda var hee`` 🙂 🐟' ,'``Japon balığı tuttun yemeyi düşünmüyorsun herhalde?``' ,'``Hamsi tuttun!`` 🐟' ,'``Levrek tuttun!`` 🐟' ,'``Hiçbir şey tutamadın maalesef!`` 🗑️' ,'``Alabalık tuttun!`` 🐟' ,'``Maalesef balık oltadan kaçtı!`` 🗑️' ,'``İstavrit tuttun!`` 🐟'];
      var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
            message.edit(`${balik}`);
 });  
}