import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../interfaces/User.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async addUser(user: CreateUserDto) {
        const newUser = new this.userModel(user);

        const result = await newUser.save();

        return result._id as string;
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUser(id: string) {
        const user = await this.findUser(id);

        return user;
    }

    async updateUser(id: string, user: User) {
        const result = await this.userModel.findByIdAndUpdate(id, user);

        return result;
    }

    async deleteUser(id: string) {
        const result = await this.userModel.findOneAndDelete({ _id: id }).exec();

        return null;
    }

    private async findUser(id: string): Promise<User> {
        const user = await this.userModel.findById(id);

        if (!user) {
            throw new NotFoundException('could not find user');
        }

        return user;
    }
}
