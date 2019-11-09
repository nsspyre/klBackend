import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import { UserSchema } from '../users/schemas/Users.schema';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController, AuthController],
  providers: [UserService, AuthService],
})
export class UsersModule {}
