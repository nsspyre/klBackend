import { Injectable, NotFoundException } from '@nestjs/common';

import {
  Product,
  Options,
  ProductOption,
} from './interfaces/Product.interface';
import { ProductDto, OptionsDto, ProductOptionsDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    @InjectModel('ProductOptions')
    private readonly productOptionsModel: Model<ProductOption>,
    @InjectModel('Options') private readonly optionsModel: Model<Options>,
  ) {}

  getAllProducts = async () => await this.productModel.find().exec();

  public async addProduct(product: ProductDto): Promise<string> {
    const newOrder = new this.productModel(product);
    const result = await newOrder.save();

    return result._id as string;
  }

  public async addOption(option: OptionsDto): Promise<string> {
    try {
      const newOption = new this.optionsModel(option);
      const result = await newOption.save();

      return result._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async addProductOption(
    productOption: ProductOptionsDto,
  ): Promise<string> {
    try {
      const newProductOption = new this.productOptionsModel(productOption);
      const result = await newProductOption.save();

      return result._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async addOptionsToProductOptions(
    id: string,
    option: string,
  ): Promise<string> {
    try {
      const productOptionUpdated = await this.productOptionsModel.findByIdAndUpdate(
        id,
        {
          $push: { options: option },
        },
      );

      return productOptionUpdated._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async getProductOptions(id: string) {
    try {
        const productOption = await this.productOptionsModel.findOne({ _id: id })
        .populate('options');

        return productOption;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async getProduct(id: string) {
    const product = await this.findProduct(id);

    return product;
  }

  private async findProduct(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);

    if (!product) {
      throw new NotFoundException('No existe ese producto');
    }

    return product;
  }
}
