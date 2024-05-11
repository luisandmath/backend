import { Injectable } from '@nestjs/common';
import { RegisterEventDTO } from './DTO/events.dto';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseClientService {
  private readonly client: any; // SupabaseClient;

  constructor(private configService: ConfigService) {
    this.client = createClient(
      configService.get('SUPABASE_URL'),
      configService.get('SUPABASE_KEY'),
    );
  }

  async registerEvent({ name, id, date, location }: RegisterEventDTO) {
    console.log(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
      '===========',
    );
    // try {
    //   const { data, error } = await client
    //     .from('events')
    //     .insert([{ name, id, date, location }]);
    //   if (error) {
    //     throw error;
    //   }
    //   return data;
    // } catch (e) {
    //   throw new Error(e.message);
    // }
  }
}
