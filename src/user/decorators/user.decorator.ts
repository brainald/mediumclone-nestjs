import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserEntity } from '../user.entity';

export const User = createParamDecorator(
  (data: keyof UserEntity, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
      return null;
    }

    if (data) {
      return request.user[data];
    }

    return request.user;
  },
);
