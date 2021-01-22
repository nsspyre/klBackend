import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductOptionsController } from './productOptions.controller';
import { ProductOptionsService } from './productOptions.service';
import { ProductOptionsSchema } from './schemas/ProductOptions.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'ProductOptions', schema: ProductOptionsSchema }]),
    ],
    controllers: [ProductOptionsController],
    providers: [ProductOptionsService],
})
export class ProductOptionsModule {}
