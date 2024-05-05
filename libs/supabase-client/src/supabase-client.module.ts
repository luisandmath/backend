import { Module } from '@nestjs/common';
import { SupabaseClientService } from './supabase-client.service';

@Module({
  providers: [SupabaseClientService],
  exports: [SupabaseClientService],
})
export class SupabaseClientModule {}
