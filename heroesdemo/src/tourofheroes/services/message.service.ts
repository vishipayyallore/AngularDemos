import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear(): void {
    this.messages.length = 0;
  }

}
