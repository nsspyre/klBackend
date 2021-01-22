import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { Product as ProductDto} from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) {}

    @Get()
    async getAllProducts() {
        const products = await this.service.getAllProducts();

        return { result: products };
    }

    @Post()
    async addProduct(@Body() product: ProductDto) {
        const id = await this.service.addProduct(product);

        return { _id: id };
    }

    @Get('id')
    async getProduct(@Param('id') id: string) {
        return this.service.getProduct(id);
    }
}
