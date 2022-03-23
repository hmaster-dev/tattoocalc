import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {msg: 'Message from server!'};
  }
}
