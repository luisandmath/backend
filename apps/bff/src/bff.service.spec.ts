import { Test, TestingModule } from '@nestjs/testing';

import { ExampleModel } from './models/example.model';
import { HttpService } from '@nestjs/axios';

describe('CruiseLineService', () => {
  let service: ExampleModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExampleModel,
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ExampleModel>(ExampleModel);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
