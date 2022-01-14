const Discord = require("discord.js")

const TOKEN = "OTMwOTQxNzUwNTk4NTgyMzEy.Yd9NEQ.hTTnfCQ482PkrcqttQ3xemsARlQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello, and welcome to the server!")
    }
})

client.login(TOKEN)