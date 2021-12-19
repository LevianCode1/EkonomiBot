const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Görünüşe göre fakirsin.");
  let item = args[0];
  if (!item) return message.channel.send("Ne satın almaya çalışıyorsun?");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("Boyle Bir İtem Yok");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Bakiyeniz yetersiz. Bu öğeyi satın almak için "+hasItem.cost+" gerekiyor.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`**${item}** ürününü **${hasItem.cost} TL** karşılığında satın aldınız.`);
};

exports.help = {
  name: "satın-al",
  aliases: [],
  usage: `satın-al <item>`
};
