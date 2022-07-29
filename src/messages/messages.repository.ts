import { readFile, writeFile } from 'fs/promises';

export class messagesRepository {
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
  }
}
