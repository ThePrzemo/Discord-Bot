import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='E!')

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def greet(ctx):
    await ctx.send(":smiley: :wave: Hello, there!")

bot.run('<NDQ1MjI3NDE5OTg1NjQxNTAy.DfQMsw.d16pY2ukgNXlc7NDFGL-JNTivRg>')
