import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dtos';
@Controller('/messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return {
      data: ['hello-world', 'good-morning'],
    };
  }

  @Post()
  async createMessage(@Body() body: createMessageDto) {
    return body;
  }

  @Get('/:id')
  async getMessage(@Param() id: string) {
    return id;
  }
}
