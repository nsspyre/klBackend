import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsSchema, OptionsSchema, ProductOptionsSchema } from './schemas/Products.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
        MongooseModule.forFeature([{ name: 'Options', schema: OptionsSchema }]),
        MongooseModule.forFeature([{ name: 'ProductOptions', schema: ProductOptionsSchema }]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
