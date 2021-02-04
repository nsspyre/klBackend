import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './interfaces/Product.interface';
import { Product as ProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly model: Model<Product>,
  ) {}

  getAllProducts = async () => await this.model.find().exec();

  public async addProduct(product: ProductDto): Promise<string> {
    try {
      const newOrder = new this.model(product);
      const result = await newOrder.save();

      return result._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async updateProductionOptionsOfProduct(id: string, productOption: string): Promise<string> {
    try {
      const updatedProduct = await this.model.findByIdAndUpdate(
        id,
        {
          $push: { productOptions: productOption },
        },
      );

      return updatedProduct._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async getProduct(id: string) {
    const product = await this.findProduct(id);

    return product;
  }

  public async findProduct(id: string): Promise<Product> {
    const product = await this.model.findById(id).populate('productOptions');

    if (!product) {
      throw new NotFoundException('No existe ese producto');
    }

    return product;
  }
}
