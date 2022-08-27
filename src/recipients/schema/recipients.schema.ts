
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type recipientsDocument = recipients & Document;

/* Ejemplo: 
  recipient:
  {
    "name": "Christopher Montiel",
    "rutNumber": 123451222,
    "rutDv": "K",
    "mail": "chris@elmaldito.com",
    "phone": "+56988227732",
    "bank": "banco frontend",
    "accType": "oculta",
    "accNumber": 99988877
  }
  */

@Schema()
export class recipients {
  @Prop()
  name: string;

  @Prop()
  rutNumber: number;

  @Prop()
  rutDv: string;

  @Prop()
  mail: string;

  @Prop()
  phone: string;

  @Prop()
  bank: string;

  @Prop()
  accType: string;
  
  @Prop()
  accNumber: number;
}

export const recipientsSchema = SchemaFactory.createForClass(recipients);