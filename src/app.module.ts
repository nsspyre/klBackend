import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import * as fromModules from './modules';
import * as fromMdwrs from './core/middlewares';

dotenv.config();

const stringConfig = process.env.NODE_ENV === 'production' ? process.env.MONGOPRODDB_URI : process.env.MONGODB_URI;

const MODULES = [
  fromModules.UsersModule,
  fromModules.OrdersModule,
];

const MIDDLEWARES = [
  fromMdwrs.AuthMiddleware,
];

@Module({
  imports: [
    MongooseModule.forRoot(
      stringConfig,
      { useNewUrlParser: true, useUnifiedTopology: true }),
    ...MODULES,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(fromMdwrs.AuthMiddleware)
      .forRoutes('test');
  }
}
