import { Injectable, NotFoundException } from '@nestjs/common';

import {
  ProductOption,
} from './interfaces/ProductOptions.interface';
import { ProductOptions as ProductOptionsDto } from './dto/create-productOption.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductOptionsService {
  constructor(
    @InjectModel('ProductOptions') private readonly model: Model<ProductOption>,
  ) {}

  public async addProductOption(
    productOption: ProductOptionsDto,
  ): Promise<string> {
    try {
      const newProductOption = new this.model(productOption);
      const result = await newProductOption.save();

      return result._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  public async pushOptions(
    id: string,
    option: string,
  ): Promise<string> {
    try {
      const productOptionUpdated = await this.model.findByIdAndUpdate(
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
      const productOption = await this.model.findOne({ _id: id });

      return productOption;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
