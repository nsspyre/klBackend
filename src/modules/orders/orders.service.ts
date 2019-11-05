import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from './interfaces/Order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OrderService {

    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) { }

    async addOrder(order: CreateOrderDto) {
        const newOrder = new this.orderModel(order);

        const result = await newOrder.save();

        return result._id as string;
    }

    async getAllOrders() {
        const orders = await this.orderModel.find().exec();
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
        const result = await this.orderModel.findOneAndDelete({ _id: id }).exec();

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
