import { Controller } from '@nestjs/common';
import { BotService } from './bot.service';

@Controller('telegram')
export class BotController {
  constructor(private readonly botService: BotService) {
    this.botService.startBot(); // Start the bot
  }
}
