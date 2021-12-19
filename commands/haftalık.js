exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 1000) + 500;
    let addMoney = client.eco.weekly(client.ecoAddUser, amount);
    if (addMoney.onCooldown) return message.reply(`Haftalık paranızı zaten talep ettiniz. Tekrar talep etmek için ${addMoney.time.days} gün, ${addMoney.time.hours} saat, ${addMoney.time.minutes} dakika ve ${addMoney.time.seconds} saniye sonra tekrar gelin.`);
    else return message.reply(`Haftalık paranız olarak **${addMoney.amount}** 💸 talep ettiniz ve şimdi **${addMoney.after}** 💸 paranız var. Ancak Youtube'da Levian Code Kanalına abone olmazsanız bakiyenizi kaybedersiniz.`);
};

exports.help = {
    name: "haftalık",
    aliases: [],
    usage: "haftalık"
}
