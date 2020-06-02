import { Controller, Get, Post, Body, Param, Patch, Delete, Request } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './interfaces/User.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UserService) {}

    @Post()
    async addUser(@Body() user: User) {
        const id = await this.service.addUser(user);

        return { _id: id };
    }

    @Get(':id')
    async getAllUsers(@Param('id') id: string) {
        const users = await this.service.getUserOrders(id);
        return users;
    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.service.getUser(id);
    }

    @Patch(':id')
    async updateUser(
        @Param('id') id: string,
        @Body('user') user: User,
    ) {
        await this.service.updateUser(id, user);

        return null;
    }

    @Delete(':id')
    async removeUser(@Param('id') id: string) {
        await this.service.deleteUser(id);
        return null;
    }
}
