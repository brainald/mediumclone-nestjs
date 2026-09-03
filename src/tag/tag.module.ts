import { Module } from '@nestjs/common';
import { TagController } from './tag.controller.js';

@Module({
  controllers: [TagController],
  providers: [],
})
export class TagModule {}