
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type destinatariosDocument = destinatarios & Document;

@Schema()
export class destinatarios {
  @Prop()
  nombre: string;

  @Prop()
  rutNumber: number;

  @Prop()
  rutDv: string;

  @Prop()
  mail: string;

  @Prop()
  telefono: string;

  @Prop()
  banco: string;

  @Prop()
  tipoCuenta: string;
  
  @Prop()
  nCuenta: number;
}

export const destinatariosSchema = SchemaFactory.createForClass(destinatarios);