import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateFeedDto} from './dto/create-feed.dto';
import { Feed } from './interfaces/Feed.interface';
import { OrderService } from '../orders/orders.service';
import { UserService } from '../users/users.service';

@Injectable()
export class FeedService {
    constructor(
        @InjectModel('Feed') private readonly feedModel: Model<Feed>,
        private readonly orderService: OrderService,
        private readonly userService: UserService,
    ) { }

    async addFeedRecommendedProducts(feed: CreateFeedDto) {
        try {
            const newFeed = new this.feedModel(feed);
            const result = await newFeed.save();

            if (result) {
                return true;
            }

        } catch (err) {
            throw err;
        }
    }

    async getRecommendedProducts() {
        try {
            const recommended = await this.feedModel.findOne()
                .select('recommended')
                .exec();

            return recommended;
        } catch (err) {
            throw err;
        }
    }

    async getUserOrdersFeed(id: string) {
        try {
            return this.userService.getUserOrders(id);
        } catch (err) {
            throw err;
        }
    }
}
