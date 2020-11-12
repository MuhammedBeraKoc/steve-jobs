const {bold} = require('../utils')

const helpFragment = (message) => {
    const helpMessage = [
        '[Github Page](https://github.com/MuhammedBeraKoc/steve-jobs)',
        'A List of Commands',
        `${bold('greet')} Salutes the user`,
        `${bold('#js <text>')} Adds highlight to your text assuming it is JavaScript`,
        `${bold('#remove <amount>')} Removes channel messages with the given amount`,
    ].join('\n')
    message.channel.send({
        embed: {
            color: 'BLUE',
            description: helpMessage
        }
    }).catch(e => console.log(e))
}

module.exports = helpFragment
