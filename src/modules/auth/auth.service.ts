import { Injectable, NotFoundException } from '@nestjs/common';

import { UserService } from '../users/users.service';
import { AuthenticationService as JwtService } from '../../core/services/authentication.service';
import { User } from '../users/interfaces/User.interface';
import * as utils from '../../core/utils/utils';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwt: JwtService,
    ) {}

    async validateUser(username: string, password: string) {
        const user = await this.userService.findUser({ username });

        if (await utils.checkUserPassword(password, user.password)) {
            return user;
        }

        return null;
    }

    async userLogin(user: User) {
        const credentials = { username: user.username, id: user._id };

        const token = await this.jwt.signToken(credentials);

        if (token) {
            await this.userService.updateUser(user.id, token);

            return token;
        }

        return null;
    }

    async userSignup(user: any) {
        const result = await this.userService.addUser(user);
        const credentials = { username: result.username, id: result._id };
        const token = await this.jwt.signToken(credentials);

        if (token) {
            await this.userService.updateUser(result._id, token);
        }

        return token;
    }
}
