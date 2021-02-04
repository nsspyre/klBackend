import { Injectable, NotFoundException } from '@nestjs/common';

import { Order, OrderPayload } from './interfaces/Order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { ProductOptionsService } from '../productOptions/productOptions.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private userService: UserService,
    private productService: ProductsService,
    private productOptionsService: ProductOptionsService,
  ) {}

  async addOrder(order: OrderPayload) {
    const { userId, location, addressDescription, products, total } = order;
    const quantity = products.length;

    const productsIds = await Promise.all(
      products.map(async product => {
        const productResult = await this.productService.findProduct(product.id);

        const productOptions = await Promise.all(
          product.productOptions.map(async productOption => {
            const {
              name,
              maxQuantity,
              isSize,
            } = await this.productOptionsService.findProductOption(
              productOption.id,
            );
            const productOptionId = await this.productOptionsService.addProductOption(
              { name, maxQuantity, isSize, options: productOption.options },
            );

            return productOptionId;
          }),
        );

        delete productResult._id;

        const productId = await this.productService.addProduct({
          ...productResult,
          productOptions,
        });

        return productId;
      }),
    );

    const newOrder = new this.orderModel({
      userId,
      quantity,
      location,
      total,
      addressDescription,
      products: productsIds,
    });

    const orderResult = await newOrder.save();

    return orderResult._id as string;
  }

  async getAllOrders() {
    const orders = await this.orderModel.find().exec();
    return orders;
  }

  async getUserOrdersFeed(id: string) {
    const orders = await this.userService.getUserOrders(id);
    return orders;
  }

  async getOrder(id: string) {
    const order = await this.findOrder(id);

    return order;
  }

  async updateOrder(id: string, order: Order) {
    const result = await this.orderModel.findByIdAndUpdate(id, order);

    return result;
  }

  async deleteOrder(id: string) {
    await this.orderModel.findOneAndDelete({ _id: id });

    return null;
  }

  private async findOrder(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id);

    if (!order) {
      throw new NotFoundException('could not find order');
    }

    return order;
  }
}
