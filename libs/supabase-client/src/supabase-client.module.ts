import { Module, RequestMethod } from '@nestjs/common';
import { SupabaseClientService } from './supabase-client.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [SupabaseClientService],
  exports: [SupabaseClientService],
})
export class SupabaseClientModule {}
