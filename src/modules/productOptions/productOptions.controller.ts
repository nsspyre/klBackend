import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ProductOptions as ProductOptionsDto } from './dto/create-productOption.dto';
import { ProductOptionsService } from './productOptions.service';

@Controller('productOptions')
export class ProductOptionsController {
  constructor(private readonly service: ProductOptionsService) {}

  @Post()
  async addProductOption(@Body() productOption: ProductOptionsDto) {
    const id = await this.service.addProductOption(productOption);

    return { _id: id };
  }

  @Put('options/:id')
  async pushOptions(
    @Param('id') productOptionId: string,
    @Body() body: { option: string },
  ) {
    const { option } = body;
    const id = await this.service.pushOptions(productOptionId, option);

    return { _id: id };
  }

  @Get()
  async getAllProductOptions() {
    const result = await this.service.getAllProductOptions();

    return result;
  }

  @Get(':id')
  async getProductOptions(@Param('id') id: string) {
    const result = this.service.getProductOptions(id);
    return result;
  }
}
