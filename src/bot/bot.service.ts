import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';

@Injectable()
export class BotService {
  private welcomeMessage = "Hello! Welcome to the bot.";
  private menuMessage = "Please select an option:\n1. Option 1\n2. Option 2";
  private option1Message = "You selected Option 1.";
  private backMessage = "You went back to the main menu.";
  private adminNotification = "Someone selected Option 1. You may want to take action.";

  bot: Telegraf
  

  constructor(private readonly configService: ConfigService) {
    // Initialize your bot with the bot token
    const botToken = this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    this.bot = new Telegraf(botToken);
    this.setupBot();
  }

  private setupBot() {
    this.bot.start((ctx) => ctx.reply(this.welcomeMessage));
  }

  // Start the bot
  startBot() {
    this.bot.launch();
  }
}
