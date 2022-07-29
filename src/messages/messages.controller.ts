import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class MessagesController {
  @Get('/messages')
  async listMessages() {
    return {
      data: ['hello-world', 'good-morning'],
    };
  }
  @Post('/messages')
  async createMessage() {
    return 'full';
  }
}
