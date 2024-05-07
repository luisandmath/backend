import { Module, RequestMethod } from '@nestjs/common';
import { SupabaseClientService } from './supabase-client.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        LoggerModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            const isProduction =
              configService.get<string>('NODE_ENV') === 'production';
            return {
              exclude: [{ method: RequestMethod.GET, path: 'health' }],
              pinoHttp: {
                transport: !isProduction
                  ? {
                      target: 'pino-pretty',
                      options: {
                        messageKey: 'message',
                      },
                    }
                  : undefined,
                messageKey: 'message',
                autoLogging: isProduction,
              },
            };
          },
        }),
      ],
    }),
  ],
  providers: [SupabaseClientService],
  exports: [SupabaseClientService],
})
export class SupabaseClientModule {}
