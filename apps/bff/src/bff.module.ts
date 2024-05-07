import { Module, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExampleResolver } from './bff.resolver';
import { BffService } from './bff.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
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
  providers: [ExampleResolver, BffService],
})
export class BffModule {}
