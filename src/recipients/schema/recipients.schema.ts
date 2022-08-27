
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type recipientsDocument = recipients & Document;

@Schema()
export class recipients {
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

export const recipientsSchema = SchemaFactory.createForClass(recipients);