import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { FeedService } from './feed.service';
import { CreateFeedDto } from './dto/create-feed.dto';

@Controller('feed')
export class FeedController {
    constructor(private service: FeedService) { }

    @Post('/recommended')
    async addRecommendedProducts(@Body() feed: CreateFeedDto) {
        return await this.service.addFeedRecommendedProducts(feed);
    }

    @Get(':id')
    async getUserOrdersFeed(@Param('id') id: string) {
        const { orders } = await this.service.getUserOrdersFeed(id);
        const { recommended } = await this.service.getRecommendedProducts();
        return { result: { orders, recommended } };
    }
}
