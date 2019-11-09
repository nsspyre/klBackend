import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../interfaces/User.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @Post('signup')
    async userSignUp(@Body('user') user: CreateUserDto) {
        const token = await this.service.userSignup(user);

        return { token };
    }

    @Post('signin')
    async userSignIn(
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const token = await this.service.userSignin(email, password);

        return { token };
    }
}
