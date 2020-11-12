const jsFragment = (message, code) => {
    const formattedCode = `\`\`\`js\n${code}\n\`\`\``
    console.log(formattedCode)
    message.channel.send(formattedCode).catch(e => console.log(e))
}

module.exports = jsFragment
