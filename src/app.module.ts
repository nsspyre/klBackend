import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { CoreModule } from './core/core.module';
import * as fromModules from './modules';
import * as fromMdwrs from './core/middlewares';

dotenv.config();

const stringConfig = process.env.MONGODB_URI;

const MODULES = [
  fromModules.UsersModule,
  fromModules.OrdersModule,
  fromModules.AuthModule,
];

@Module({
  imports: [
    MongooseModule.forRoot(
      stringConfig,
      { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }),
    ...MODULES,
    CoreModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(fromMdwrs.AuthMiddleware)
      .forRoutes('test');
  }
}
