const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
});

bot.login(process.env.token);

Running java -version on ⬢ sushi... up, run.5064 (Free)
openjdk version "1.8.0_144"
OpenJDK Runtime Environment (Zulu 8.23.0.3-linux64) (build 1.8.0_144-b01)
OpenJDK 64-Bit Server VM (Zulu 8.23.0.3-linux64) (build 25.144-b01, mixed mode)
