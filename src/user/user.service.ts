import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDTO): Promise<CreateUserDTO> {
    return createUserDto;
  }
}
