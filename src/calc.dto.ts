import { ApiProperty } from '@nestjs/swagger';

export class CalcDto {
  @ApiProperty()
  hours: number;
  @ApiProperty({ example: 40 })
  rass?: number = 40;
  @ApiProperty({ example: 30 })
  oneHour?: number = 30;
  @ApiProperty({ example: 1.2 })
  coef?: number = 1.2;
}
