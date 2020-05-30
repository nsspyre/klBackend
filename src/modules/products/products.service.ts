import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './interfaces/Product.interface';
import { Product as Productdto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }

    async addProduct(product: Productdto): Promise<string> {
        const newOrder = new this.productModel(product);
        const result = await newOrder.save();
        return result._id as string;
    }

    getAllProducts = async () => await this.productModel.find().exec();

    async getProduct(id: string) {
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
