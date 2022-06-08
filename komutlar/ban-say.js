const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(`Sunucunuzda **${bans.size}** Banlanmış Üye Bulunmakta.`))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["bansayısı"],
    aliases: ['ban-say','BAN-SAY','Ban-say','BAN-say'],
    permLevel: 0
  };
  
  exports.help = {
    name: "ban-say",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "bansay"
  }