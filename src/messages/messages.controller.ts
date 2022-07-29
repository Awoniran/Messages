import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  async listMessages() {
    return {
      data: ['hello-world', 'good-morning'],
    };
  }

  @Post()
  //
  async createMessage(@Body() body: any) {
    return body;
  }

  @Get('/:id')
  async getMessage(@Param() id: string) {
    return id;
  }
}
