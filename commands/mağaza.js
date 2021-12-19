const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Mağaza")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("Öğeyi satın almak için: ?satın-al <item> yapın.")
  return message.channel.send(embed);
};

exports.help = {
  name: "mağaza",
  aliases: [],
  usage: `mağaza`
};
