import closeWithGrace from "close-with-grace";
import Fastify from "fastify";
import autoLoad from "@fastify/autoload";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import { Bot } from "grammy";

import { config } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pass --options via CLI arguments in command to enable these options.
const options = {};

const app = Fastify({
  logger: true
});

const bot = new Bot(config.BOT_TOKEN);

app.register(autoLoad, {
  dir: path.join(__dirname, "plugins"),
  options: Object.assign({}, options)
});

app.register(fastifyStatic, {
  root: path.join(process.cwd(), config.PUBLIC_DIR),
  prefix: "/"
});

// Receive webhook updates on path https://example.com/<BOT-TOKEN>
//app.post(config.WEBHOOK_PATH + config.BOT_TOKEN, webhookCallback(bot, "fastify", { secretToken: config.SECRET_TOKEN }));

// delay is the number of milliseconds for the graceful close to finish
const closeListeners = closeWithGrace(
  { delay: process.env.FASTIFY_CLOSE_GRACE_DELAY || 500 },
  // eslint-disable-next-line no-unused-vars
  async function ({ signal, err, manual }) {
    if (err) {
      app.log.error(err);
    }
    await app.close();
  }
);

app.addHook("onClose", async (instance, done) => {
  closeListeners.uninstall();
  done();
});

bot.command("start", async (ctx) => {
  const URL = config.WEBHOOK_URL;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [[{ text: "Open Seal App", web_app: { URL } }]]
    }
  };
  await ctx.reply("Press button bellow to open the App", keyboard);
});

const startServer = async () => {
  try {
    await app.listen({ port: config.WEBAPP_PORT, host: config.WEBAPP_HOST }, async (error) => {
      await bot.init();
      console.log("Bot started");
      //await bot.api.setWebhook(config.WEBHOOK_URL + config.BOT_TOKEN, { secret_token: config.SECRET_TOKEN });
    });

    console.log("Server listening on " + config.WEBAPP_PORT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
