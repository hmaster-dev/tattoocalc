import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { msg: 'Message from server!' };
  }

  calc(hours: number, rass = 40, oneHour = 30, coef = 1.2): number {
    let result: number = rass + oneHour;
    for (let i = 1; i < hours; i++) {
      oneHour = this.forWork(oneHour, coef);
      result += oneHour;
    }
    return Math.ceil(Math.ceil(result / 10) * 10);
  }

  forWork(hour: number, coef: number) {
    return hour * coef;
  }
}
