import { SlashCommandAssertions, SlashCommandBuilder } from "discord.js"



export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('查詢機器人延遲')


export const action = async (ctx) => {
    await ctx.reply('pong!')
}