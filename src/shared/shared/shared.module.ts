import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';
import { BotModule } from 'src/bot/bot.module';
import { AdminModule } from 'src/admin/admin.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[BotModule, BotModule, AdminModule, DatabaseModule],
  controllers: [SharedController],
  providers: [SharedService],
})
export class SharedModule {}
