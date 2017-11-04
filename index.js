const Discord = require("discord.js");

const TOKEN = "Mzc2MzE3MDk2NDg3MDI2Njg4.DN9Iow.jP24kQ31LRjZI6_inuZrfaaUl8E";
const PREFIX = "!";

var bot = new Discord.Client();

var fortunes = [
    "Yes",
    "No",
    "Maybe",
];

bot.on("ready", function() {
    console.log("Ready");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "whitelist":
        message.channel.sendMessage("Thank you, You have been successfully whitelisted! Please contact a Owner or Co-Owner for your Whitelist Key!");
        break;
    case "help":
    var embed = new Discord.RichEmbed()
    .addField("!register Username Password", "Makes an Account", true)
    .addField("!score username", "Gets an account's score", true)
    .addField("!leaderboard", "Shows the top ranked accounts", true)
    .addField("!help", "Shows a list of commands", true)
    .addField("!kill username", "Kills a Person with Nico Power", true)
    .addField("!saymessage", "Makes the bot say a random message", true)
    .addField("!delete", "Delete's your account", true)
    .addField("!ping", "Replys with Pong", true)
    .addField("!whitelist gameid", "Whitelists a game and dms you the Key (Buyers)", true)
    .addField("!cticket", "Gives you a verification ticket (Buyers)", true)
    .addField("!verifyticket", "Verifies your client in the buyers server (Buyer)", true)
    .addField("!change pw username password newpassword", "Changes your password (Buyers)", true)
    .setFooter("NitroDumps | Bot")
    .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed);
    break;
    case "info":
        message.channel.sendMessage("I'm a Super Bot Created by Reece!");
        break;
    case "buy":
        message.channel.sendMessage("Our Prices are as Follow's:  ***Personal £2/$2   Turbo £4/$4    Enterprise   £6/$6*** Thank you");
        break;
    default:
        message.channel.sendMessage("Invalid Command");
        
    }
});

bot.login(TOKEN);