import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@app/user/user.service';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(@Body('user') createUserDto: CreateUserDTO): Promise<any> {
    console.log('createUserDto', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}
