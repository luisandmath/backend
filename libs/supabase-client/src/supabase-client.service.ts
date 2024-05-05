import { Injectable } from '@nestjs/common';

@Injectable()
export class SupabaseClientService {
  getHello(): string {
    return 'Hello World! supabase';
  }
}
