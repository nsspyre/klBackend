import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ProductDto, OptionsDto, ProductOptionsDto } from './dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly service: ProductsService) {}

    @Post()
    async addProduct(@Body() product: ProductDto) {
        const id = await this.service.addProduct(product);

        return { _id: id };
    }

    @Post('option')
    async addOption(@Body() option: OptionsDto) {
        const id = await this.service.addOption(option);

        return { _id: id };
    }

    @Post('productOption')
    async addProductOption(@Body() productOption: ProductOptionsDto) {
        const id = await this.service.addProductOption(productOption);

        return { _id: id };
    }

    @Put('productOption/:id')
    async addOptionsToProductOptions(
        @Param('id') productOptionId: string,
        @Body() body: any,
    ) {
        const { option } = body;
        const id = await this.service.addOptionsToProductOptions(productOptionId, option);

        return { _id: id };
    }

    @Get('productOption/:id')
    async getProductOptions(@Param('id') id: string) {
        const result = this.service.getProductOptions(id);
        return result;
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
