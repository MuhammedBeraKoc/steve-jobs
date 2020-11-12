const removeFragment = async (message, amount) => {
    if (amount > 100) return message.reply('I can\'t remove more than 100.')
    if (amount < 1) return message.reply('You have to delete at least 1 message!')
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages)
    })
}

module.exports = removeFragment
