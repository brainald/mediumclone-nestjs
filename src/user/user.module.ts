import { Module } from '@nestjs/common';
import { UserController } from '@app/user/user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
