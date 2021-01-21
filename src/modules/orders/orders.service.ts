import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from './interfaces/Order.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserService } from '../users/users.service';

@Injectable()
export class OrderService {

    constructor(
        @InjectModel('Order') private readonly orderModel: Model<Order>,
        private userService: UserService,
    ) { }

    async addOrder(order: CreateOrderDto) {
        const { userId } = order;

        const newOrder = new this.orderModel(order);

        const orderResult = await newOrder.save();

        const { orders } = await this.userService.findUserById(userId);

        const newUserOrders = [...orders, orderResult._id];

        await this.userService.updateUser(userId, { products: newUserOrders });

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
