import { IsAlphanumeric, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTransferDto {
  //Nombre destinatario
  @IsNotEmpty()
  @IsString()
  recName: string;

  //Número de Rut destinatario
  @IsNotEmpty()
  @IsNumber()
  recRutNumber: number;

  //DV destinatario
  @IsNotEmpty()
  @IsAlphanumeric()
  recDv: string;

  //Banco destino
  @IsNotEmpty()
  @IsString()
  recBank: string;

  //Tipo de cuenta destino
  @IsNotEmpty()
  @IsString()
  recAccType: string;

  //Monto transferido
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  
  //Fecha de la transferencia
  @IsNotEmpty()
  @IsDateString()
  date: Date;

  //Hora de la transferencia
  @IsNotEmpty()
  @IsMilitaryTime()
  time: string;

  //N° Cuenta de origen (No necesario por ahora.)
  /*@IsNotEmpty()
  @IsNumber()
  originAccount: number;*/
}
