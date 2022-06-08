exports.run = async (client, msg, args) => {
    let ask=[
      "Aşk ölçer **%3** Gösteriyor.",
      "Aşk ölçer **%6** Gösteriyor.",
      "Aşk ölçer **%9 **Gösteriyor.",
      "Aşk ölçer** %12** Gösteriyor.",
      "Aşk ölçer **%18 **Gösteriyor.",
      "Aşk ölçer **%20** Gösteriyor.",
      "Aşk ölçer **%23** Gösteriyor.",
      "Aşk ölçer** %26 **Gösteriyor.",
      "Aşk ölçer **%29 **Gösteriyor.",
      "Aşk ölçer **%30 **Gösteriyor.",
      "Aşk ölçer** %40** Gösteriyor.",
      "Aşk ölçer **%50 **Gökomutlar.",
      "Aşk ölçer **%60** Gösteriyor.",
      "Aşk ölçer **%70** Gösteriyor.",
      "Aşk ölçer **%73** Gösteriyor.",
      "Aşk ölçer **%76 **Gösteriyor.",
      "Aşk ölçer **%79 **Gösteriyor.",
      "Aşk ölçer** %82 **Gösteriyor.",
      "Aşk ölçer **%85 **Gösteriyor.",
      "Aşk ölçer **%88** Gösteriyor.",
      "Aşk ölçer **%90 **Gösteriyor.",
      "Aşk ölçer **%91** Gösteriyor.",
      "Aşk ölçer **%92 **Gösteriyor.",
      "Aşk ölçer** %93 **Gösteriyor.",
      "Aşk ölçer **%94 **Gösteriyor.",
      "Aşk ölçer **%95** Gösteriyor.",
      "Aşk ölçer **%96** Gösteriyor.",
      "Aşk ölçer **%97** Gösteriyor.",
      "Aşk ölçer **%98** Gösteriyor.",
      "Aşk ölçer **%99** Gösteriyor.",
      "Aşk ölçer **%100** Gösteriyor.",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('**Kimi Sevdiğini etiketlemelisin..**')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0,
  aliases: ["aşk-ölçer", "AŞK-ÖLÇER","Aşk-ölçer","Aşk-Ölçer"]
};

  exports.help = {
    name: 'aşk-ölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşk-ölçer'
   }

