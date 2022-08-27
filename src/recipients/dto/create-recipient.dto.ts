import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateRecipientDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsNumber()
  rutNumber: number;

  @IsAlphanumeric()
  @IsNotEmpty()
  rutDv: string;

  @IsNotEmpty()
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsNotEmpty()
  @IsString()
  bank: string;

  @IsNotEmpty()
  @IsString()
  accType: string;

  @IsNotEmpty()
  @IsNumber()
  accNumber: number;
}
