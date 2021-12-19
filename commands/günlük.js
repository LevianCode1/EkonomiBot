module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Günlük paranızı zaten talep ettiniz. Tekrar talep etmek için ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika ve ${addMoney.time.seconds} saniye sonra tekrar gelin.`);
    else return message.reply(`Günlük paraınızı olarak **${addMoney.amount}** 💸 talep ettiniz ve şimdi **${addMoney.after}** 💸 paranız var.`);
};

module.exports.help = {
    name: "günlük",
    aliases: [],
    usage: "günlük"
}
