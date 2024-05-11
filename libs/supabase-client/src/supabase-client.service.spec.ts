import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseClientService } from './supabase-client.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('SupabaseClientService', () => {
  let service: SupabaseClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      providers: [SupabaseClientService],
    }).compile();

    service = module.get<SupabaseClientService>(SupabaseClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
