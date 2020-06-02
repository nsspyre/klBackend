import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './interfaces/User.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as utils from '../../core/utils/utils';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async addUser(user: CreateUserDto): Promise<User> {
        user.password = await utils.encriptPassword(user.password);

        try {
            await this.userExists({ email: user.email }, true);

            const newUser = new this.userModel(user);

            const result = await newUser.save();

            return result;
        } catch (err) {
            throw new BadRequestException(err);
        }
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUser(id: string) {
        const user = await this.findUserById(id);

        return user;
    }

    async updateUser(id: string, user: any) {
        const result = await this.userModel.findByIdAndUpdate(id, user).exec();

        return result;
    }

    async deleteUser(id: string) {
        const result = await this.userModel.findOneAndDelete({ _id: id }).exec();

        return null;
    }

    async findUserById(id: string): Promise<User> {
        const user = await this.userModel.findById(id);

        if (!user) {
            throw new NotFoundException('Usuario no existe');
        }

        return user;
    }

    async findUser(data): Promise<User> {
        const user = await this.userModel.findOne(data);

        if (!user) {
            throw new NotFoundException('Usuario no existe');
        }

        return user;
    }

    async getUserOrders(id: string) {
        const result = await this.userModel.findById(id)
            .select('orders')
            .populate({
                path: 'orders',
                options: {
                    sort: { createdAt: 'asc' },
                    limit: 3,
                },
            })
            .exec();

        return result;
    }

    async userExists(
        data,
        throwException: boolean = false,
    ): Promise<boolean> {

        const exists = await this.userModel.exists(data);

        if (exists && throwException) {
            throw new BadRequestException('username o email ya están registrados');
        }

        return exists;
    }
}
