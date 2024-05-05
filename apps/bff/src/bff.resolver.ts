import { Query, Resolver } from '@nestjs/graphql';
import { ExampleModel } from './models/example.model';
import { BffService } from './bff.service';

@Resolver(() => ExampleModel)
export class ExampleResolver {
  constructor(private readonly bffService: BffService) {}
  @Query(() => ExampleModel, { name: 'example' })
  async example(): Promise<ExampleModel> {
    return this.bffService.getHello();
  }
}
