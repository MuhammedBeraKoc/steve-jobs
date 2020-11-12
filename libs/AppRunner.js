const runnerModule = (() => {
    const Discord = require('discord.js')
    require('dotenv').config()

    const client = new Discord.Client()
    return {
        client,
        run(runnerFunction) {
            runnerFunction()
            const discordToken = process.env.DISCORD_TOKEN
            client.login(discordToken)
        }
    }
})()

module.exports = runnerModule
