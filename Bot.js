const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwOTQxNzUwNTk4NTgyMzEy.Yd9NEQ.8T9hdy7SKIX-Pt0veOgGaOPE9DI"

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

client.login(process.env.TOKEN)
