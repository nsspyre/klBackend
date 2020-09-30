import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import * as fromServices from './services';

import * as dotenv from 'dotenv';

dotenv.config();

const SERVICES = [
    fromServices.AuthenticationService,
];

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '5h' },
  }),
  ],
  providers: [...SERVICES],
  exports: [...SERVICES],
})
export class CoreModule {}
