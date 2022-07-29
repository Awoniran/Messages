import {
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  Body,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dtos';
import { MessageService } from './messages.services';

@Controller('/messages')
export class MessagesController {
  constructor(public messagesService: MessageService) {}

  @Get()
  async listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  async createMessage(@Body() body: createMessageDto) {
    //
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('no message found with the provided id');
    }
    return message;
  }
}
