import { UserEntity } from '@app/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { FollowEntity } from './follow.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FollowEntity])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
