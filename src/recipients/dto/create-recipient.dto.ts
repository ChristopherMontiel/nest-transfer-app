import { IsAlphanumeric, IsEmail, IsIdentityCard, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";

export class CreateRecipientDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  
  @IsNotEmpty()
  @IsNumber()
  rutNumber: number;

  @IsAlphanumeric()
  @IsNotEmpty()
  rutDv: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  banco: string;

  @IsNotEmpty()
  @IsString()
  tipoCuenta: string;

  @IsNotEmpty()
  @IsNumber()
  nCuenta: number;
}
