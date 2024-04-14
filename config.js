import dotenv from "dotenv";

dotenv.config();

const WEBHOOK_HOST = process.env.WEBHOOK_HOST || "https://127.0.0.1:8000";
const WEBHOOK_PATH = process.env.WEBHOOK_PATH || "/";

export const config = {
  BOT_TOKEN: process.env.BOT_TOKEN || "", // Add your token from Telegram's BotFather
  SECRET_TOKEN: process.env.SECRET_TOKEN || "",
  WEBAPP_HOST: process.env.WEBAPP_HOST || "0.0.0.0",
  WEBAPP_PORT: process.env.WEBAPP_PORT || 3000,
  WEBHOOK_HOST: WEBHOOK_HOST,
  WEBHOOK_PATH: WEBHOOK_PATH,
  WEBHOOK_URL: WEBHOOK_HOST + WEBHOOK_PATH,
  PUBLIC_DIR: process.env.PUBLIC_DIR || "public",
  SPA_FILENAME: process.env.SPA_FILENAME || "index.html"
};
