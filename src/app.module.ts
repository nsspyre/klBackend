import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import * as fromModules from './modules';

const MODULES = [
  fromModules.UsersModule,
  fromModules.OrdersModule,
];

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dev:iQ4CBoF2M7UW0NsU@kl-wo8ho.mongodb.net/test?retryWrites=true&w=majority',
    ),
    ...MODULES,
  ],
})
export class AppModule {}
