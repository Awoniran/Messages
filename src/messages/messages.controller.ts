import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dtos';
import { messageService } from './messages.services';

@Controller('/messages')
export class MessagesController {
  messageService: messageService;
  constructor() {
    this.messageService = new messageService();
  }
  @Get()
  async listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  async createMessage(@Body() body: createMessageDto) {
    // return this.messageService.create());
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
}
