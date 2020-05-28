import { Injectable, UnauthorizedException } from '@nestjs/common';

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

    async validateUser(email: string, password: string) {
        const user = await this.userService.findUser({ email });

        if (await utils.checkUserPassword(password, user.password)) {
            return user;
        }

        return null;
    }

    async userLogin(userData: User) {
        const { email, password} = userData;
        const user = await this.validateUser(email, password);

        if (user) {
            const credentials = { email: user.email, id: user._id };

            const token = await this.jwt.signToken(credentials);

            if (token) {
                await this.userService.updateUser(user.id, token);

                return token;
            }

            return null;
        } else {
            throw new UnauthorizedException('Contraseña o email son incorrectos!');
        }

    }

    async userSignup(user: User) {
        const result = await this.userService.addUser(user);
        const credentials = { email: result.email, id: result._id };
        const token = await this.jwt.signToken(credentials);

        if (token) {
            await this.userService.updateUser(result._id, token);
        }

        return token;
    }
}
