const helpFragment = require('./command-fragments/help')
const removeFragment = require('./command-fragments/remove')
const jsFragment = require('./command-fragments/js')

const PREFIX = '>'

const buildCommandHandler = (client) => {
    client.once('ready', () => {
        console.log('Steve Jobs is ready!')
    })

    client.on('message', async (message) => {
        if (!message.content.startsWith(PREFIX) || message.author.bot) return
        const args = message.content.slice(PREFIX.length).split(/ +/)
        const command = args.shift().toLowerCase()
        switch (command) {
            case 'greet':
                message.channel.send(`A fine day I wish for you!`)
                break
            case 'help':
                helpFragment(message)
                break
            case 'remove':
                await removeFragment(message, args[1])
                break
            case 'js':
                jsFragment(message, args.join(' '))
                break
        }
    })
}

module.exports = buildCommandHandler
