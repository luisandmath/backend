import { Module, RequestMethod } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ExampleResolver } from './bff.resolver';
import { BffService } from './bff.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { SupabaseClientModule } from '@libs/supabase-client';
import { SupabaseClient } from '@supabase/supabase-js';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: process.env.SUPABASE_URL,
      }),
    }),
    SupabaseClientModule,
  ],
  providers: [ExampleResolver, BffService],
})
export class BffModule {}
