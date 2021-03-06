import { Controller, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/interfaces/User.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    // @UseGuards(AuthGuard('local'))
    @Post('login')
    async userLogin(@Body() user: User) {
        return await this.service.userLogin(user);
    }

    @Post('signup')
    async userSignUp(@Body() user: User) {
        const token = await this.service.userSignup(user);

        return token;
    }
}
