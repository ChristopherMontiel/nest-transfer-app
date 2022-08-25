
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type destinatariosDocument = destinatarios & Document;

@Schema()
export class destinatarios {
  @Prop()
  nombre: string;

  @Prop()
  rut: string;

  @Prop()
  mail: string;

  @Prop()
  telefono: string;

  @Prop()
  banco: string;

  @Prop()
  tipoCuenta: string;
  
  @Prop()
  nCuenta: string;
}

export const destinatariosSchema = SchemaFactory.createForClass(destinatarios);