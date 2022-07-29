import { IsString } from 'class-validator';

// DTO --- means Data Transfer Object

export class createMessageDto {
  @IsString()
  //   name: string;
  //   age: string;
  //   school: string;
  content: number;
}
