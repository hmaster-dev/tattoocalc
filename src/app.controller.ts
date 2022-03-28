import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CalcDto } from './calc.dto';

@ApiTags('Калькулятор')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/msg')
  getHello() {
    return this.appService.getHello();
  }

  @ApiOperation({ summary: 'Посчитать стоимость татуировки' })
  @ApiBody({ type: CalcDto })
  @Post('/api/calc')
  calc(@Body() calcDto: CalcDto): number {
    return this.appService.calc(
      calcDto.hours,
      calcDto.rass,
      calcDto.oneHour,
      calcDto.coef,
    );
  }
}
