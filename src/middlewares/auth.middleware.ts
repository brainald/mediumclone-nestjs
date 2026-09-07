import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExpressRequest } from '@app/types/expressRequest.interface';
import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '@app/config';
import { UserService } from '@app/user/user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
      req.user = null;
      return next();
    }

    const token = authorization.split(' ')[1];

    if (!token) {
      req.user = null;
      return next();
    }

    try {
      const decodedToken = verify(token, JWT_SECRET) as { id: number };
      const user = await this.userService.findById(decodedToken.id);
      req.user = user ?? null;
    } catch (error) {
      req.user = null;
    }

    return next();
  }
}
