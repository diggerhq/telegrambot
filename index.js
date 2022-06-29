import { Telegraf } from 'telegraf';
import express from 'express';

const bot = new Telegraf(process.env.BOT_TOKEN || 'dummy_bot_token');
const server = express();

// health check
server.get('/', (req, res) => {
  res.send('Telegram Bot Example by Digger - OK');
});

server.listen(8080);

bot.start((ctx) => ctx.reply(`
Hi there! I'm Telegram Bot Example by Digger
`));

bot.command('helloworld', (ctx) => {
  ctx.reply('Hello World!');
});

bot.on('message', async (ctx) => {
  ctx.reply('Message received!');
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
