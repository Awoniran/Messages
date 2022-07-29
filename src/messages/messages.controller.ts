import {
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  Body,
} from '@nestjs/common';
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
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('no message found with the provided id');
    }
    return message;
  }
}
