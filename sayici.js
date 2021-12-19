const { db } = require("quick.eco");

function counter(message, client) {
  let channel = message.channel;
  let count = db.fetch(`counter_${message.guild.id}`);
  if (count === null) count = db.set(`counter_${message.guild.id}`, {
    number: 0,
    author: client.user.id
  });
  
  if (!message.author.bot && message.author.id === count.author) {
    message.delete();
    message.reply("Lütfen sıranızı bekleyin").then(m => m.delete(3000));
    return;
  }
  if (!message.author.bot && isNaN(message.content)) {
    message.delete();
    message.reply("bu kanaldaki mesajlar bir sayı olmalıdır").then(m => m.delete(3000));
    return;
  }
  if (!message.author.bot && parseInt(message.content) !== count.number + 1) {
    message.delete();
    message.reply(`sonraki sayı ${count.number + 1} olmalıdır`).then(m => m.delete(3000));
    return;
  }
  count = db.set(`counter_${message.guild.id}`, { number: count.number + 1, author: message.author.id });
  channel.setTopic(`Sonraki sayı ${count.number + 1} olmalıdır.`);
}

module.exports = counter;
