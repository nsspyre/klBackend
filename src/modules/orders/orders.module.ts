import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { OrdersSchema } from './schemas/Orders.schema';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { ProductOptionsModule } from '../productOptions/productOptions.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: OrdersSchema }]),
    UsersModule,
    ProductsModule,
    ProductOptionsModule,
  ],
  controllers: [OrdersController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrdersModule {}
