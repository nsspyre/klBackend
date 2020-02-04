import { Controller, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly service: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async userLogin(@Request() req) {
        return await this.service.userLogin(req.user);
    }

    @Post('signup')
    async userSignUp(@Request() req) {
        const token = await this.service.userSignup(req.user);

        return token;
    }
}
