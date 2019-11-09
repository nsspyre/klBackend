import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../interfaces/User.interface';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async userSignup(user: CreateUserDto) {
        const newUser = new this.userModel(user);

        const result = await newUser.save();

        return result.token as string;
    }

    async userSignin(email: string, password: string) {
        // tslint:disable-next-line:no-console
        console.log('do magic');
        return null;
    }
}
