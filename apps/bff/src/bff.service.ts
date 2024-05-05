import { Injectable } from '@nestjs/common';
import { ExampleModel } from './models/example.model';

@Injectable()
export class BffService {
  getHello(): ExampleModel {
    return { id: 1, name: 'Hello World' };
  }
}
