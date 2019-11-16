import { Controller, Get, Post, Body, Param, Patch, Delete, Request } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/User.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UserService) {}

    @Post()
    async addUser(@Request() body) {
        const { user } = body;
        const id = await this.service.addUser(user);

        return { _id: id };
    }

    @Get()
    async getAllUsers() {
        const users = this.service.getAllUsers();
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
