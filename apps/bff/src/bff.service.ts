import { Injectable } from '@nestjs/common';
import { ExampleModel } from './models/example.model';
import { SupabaseClientService } from '@libs/supabase-client';

@Injectable()
export class BffService {
  constructor(private supabaseClientService: SupabaseClientService) {}
  getHello(): ExampleModel {
    this.supabaseClientService.registerEvent({
      name: 'Hello World',
      id: 'wad',
      date: '2021-09-01T00:00:00.000Z',
      location: {
        destination: 'World',
        origin: 'Hello',
      },
    });
    return { id: 1, name: 'Hello World' };
  }
}
