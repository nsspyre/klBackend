import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { OrderService } from './orders.service';
import { Order, OrderPayload } from './interfaces/Order.interface';

@Controller('orders')
export class OrdersController {
    constructor(private readonly service: OrderService) {}

    @Post()
    async addOrder(@Body() order: OrderPayload) {

        const id = await this.service.addOrder(order);

        return { _id: id };
    }

    @Get()
    async getAllOrders() {
        const orders = this.service.getAllOrders();
        return orders;
    }

    @Get(':id')
    getOrder(@Param('id') id: string) {
        return this.service.getOrder(id);
    }

    @Patch(':id')
    async updateOrder(
        @Param('id') id: string,
        @Body('order') order: Order,
    ) {
        await this.service.updateOrder(id, order);

        return null;
    }

    @Delete(':id')
    async removeOrder(@Param('id') id: string) {
        await this.service.deleteOrder(id);
        return null;
    }
}
