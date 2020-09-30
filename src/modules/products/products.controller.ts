import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Product } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) {}

    @Post()
    async addProduct(@Body() product: Product) {
        const id = await this.service.addProduct(product);

        return { _id: id };
    }

    @Get()
    async getAllProducts() {
        const products = await this.service.getAllProducts();

        return { result: products };
    }

    @Get('id')
    async getProduct(@Param('id') id: string) {
        return this.service.getProduct(id);
    }
}
