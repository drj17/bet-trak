import { IsInt } from 'class-validator';

export class BetDTO {
  @IsInt()
  readonly wager: number;

  @IsInt()
  readonly line: number;
}
