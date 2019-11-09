import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: any) {
        // tslint:disable-next-line:no-console
        console.log('request in mdw');
        next();
    }
}
