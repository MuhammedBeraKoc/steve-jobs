const http = require('http')

const DiscordAppRunner = require('./libs/AppRunner')
const { client, run } = DiscordAppRunner
const buildCommandHandler = require('./libs/CommandHandler')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain',
    })
    res.write('Server is ready.')
    res.end()
}).listen(4040)
run(() => buildCommandHandler(client))
