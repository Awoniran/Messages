import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const docs = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(docs);
    return messages[id];
  }
  async findAll() {
    const docs = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(docs);
    return messages;
  }
  async create(content: string) {
    const docs = await writeFile('messages.json', 'utf8');
    // const message = JSON.parse();
    // return message;
  }
}
