const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const plasmic = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription('<a:ykleniyor:927552432391725116>  **Ping Hesaplanıyor...**')
  
   let plasmicc = Date.now(); 
   let plasmiccode = await message.channel.send(plasmic)
   let plasmiccodee = (Date.now() - plasmicc); 
   let plasmicAPI = (app.ws.ping).toFixed(2)
    setInterval(() => {
   const yrnexembed = new Discord.MessageEmbed()
    plasmiccode.edit(yrnexembed);
    }, 5000)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping komutu işte yaw',
  usage: 'ping'
};