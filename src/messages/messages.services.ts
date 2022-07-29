import { messagesRepository } from './messages.repository';

export class messageService {
  messageRepo: messagesRepository;
  constructor() {
    this.messageRepo = new messagesRepository();
  }
  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
  findAll() {
    return this.messageRepo.findAll();
  }
  create(content: string) {
    return this.messageRepo.create(content);
  }
}
