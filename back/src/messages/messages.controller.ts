import {
  Put,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Controller,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { MessagesService } from './messages.service';

import { Message, MessageDTO } from './types';

// TODO add guards everywhere
@Controller('/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':chatId')
  async getMessages(@Param('chatId') chatId: string): Promise<void> {
    return this.messagesService.getMessages(+chatId);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post()
  // createMessage(@Body() body: Message): void {
  //   return this.messagesService.createMessage(body);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Put()
  // updateMessage(@Body() body: Partial<Message>): void {
  //   return this.messagesService.updateMessage(body);
  // }
}
