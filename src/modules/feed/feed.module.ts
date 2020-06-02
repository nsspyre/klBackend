import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedSchema } from './schema/Feed.schema';
import { OrdersModule } from '../orders/orders.module';
import { UsersModule} from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feed', schema: FeedSchema }]),
    OrdersModule,
    UsersModule,
  ],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
