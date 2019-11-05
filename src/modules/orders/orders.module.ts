import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrderService } from './orders.service';
import { OrdersSchema } from './schemas/Orders.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Order', schema: OrdersSchema }])],
  controllers: [OrdersController],
  providers: [OrderService],
})
export class OrdersModule {}
