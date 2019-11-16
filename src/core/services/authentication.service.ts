import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {
    constructor(private readonly jwtService: JwtService) {}

    public async signToken(
        payload: { username: string, id: string },
    ): Promise<{ token: string }> {

        if (payload) {
            const token = await this.jwtService.signAsync(payload);
            return { token };
        }

        return null;
    }
}
