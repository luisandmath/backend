import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ExampleModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
