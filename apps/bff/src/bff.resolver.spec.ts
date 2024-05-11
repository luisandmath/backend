import { Test, TestingModule } from '@nestjs/testing';

import { ExampleResolver } from './bff.resolver';
import { BffService } from './bff.service';
import { HttpService } from '@nestjs/axios';
import { SupabaseClientModule } from '@libs/supabase-client';

describe('bffResolver', () => {
  let resolver: ExampleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SupabaseClientModule],
      providers: [
        ExampleResolver,
        BffService,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<ExampleResolver>(ExampleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
