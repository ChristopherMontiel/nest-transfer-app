import { IsAlphanumeric, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateRecipientDto {
  //Nombre Destinatario
  @IsNotEmpty()
  @IsString()
  name: string;
  
  //Número de Rut Destinatario
  @IsNotEmpty()
  @IsNumber()
  rutNumber: number;

  //DV Destinatario
  @IsAlphanumeric()
  @IsNotEmpty()
  rutDv: string;

  //mail Destinatario
  @IsNotEmpty()
  @IsEmail()
  mail: string;

  //N° de teléfono Destinatario
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  //Banco Destinatario
  @IsNotEmpty()
  @IsString()
  bank: string;

  //Tipo de cuenta
  @IsNotEmpty()
  @IsString()
  accType: string;

  //N° de cuenta bancaria
  @IsNotEmpty()
  @IsNumber()
  accNumber: number;
}
