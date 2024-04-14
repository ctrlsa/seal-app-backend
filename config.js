import dotenv from "dotenv";



dotenv.config();

const APP_HOST = process.env.WEBAPP_HOST || "0.0.0.0";
const APP_PORT = process.env.WEBAPP_PORT || 3000;
const WEBAPP_URL = process.env.WEBAPP_URL || "https://webapp.example.com:8000/";
const BOT_TOKEN = process.env.BOT_TOKEN || ""; // Add your token from Telegram's BotFather
const SECRET_TOKEN = process.env.SECRET_TOKEN || "";
const PUBLIC_DIR = process.env.PUBLIC_DIR || "public";
const SPA_FILENAME = process.env.SPA_FILENAME || "index.html";

export const config = {
  APP_HOST: APP_HOST,
  APP_PORT: APP_PORT,
  WEBAPP_URL: WEBAPP_URL,
  BOT_TOKEN: BOT_TOKEN,
  SECRET_TOKEN: SECRET_TOKEN,
  PUBLIC_DIR: PUBLIC_DIR,
  SPA_FILENAME: SPA_FILENAME
};