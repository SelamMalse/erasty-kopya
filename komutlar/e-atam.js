const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setDescription('🌹 **Atam Sen Çok Yaşa.**')
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ATAM'],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: 'atam',
  description: '',
  usage: ''
};