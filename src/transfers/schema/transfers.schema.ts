
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type transfersDocument = transfers & Document;

@Schema()
export class transfers {

  /* Ejemplo:
  "recName": "Christopher Montiel",
  "recRutNumber": 17719509,
  "recDv" : "K",
  "recBank": "banco genial",
  "recAccType": "Cta Corriente",
  "amount" : 3000,
  "date" : "23/08/2022",
  "time" : "17:26",
  "originAccount": 2222222
  */
  @Prop()
  recName: string;

  @Prop()
  recRutNumber: number;

  @Prop()
  recDv: string;

  @Prop()
  recBank: string;

  @Prop()
  recAccType: string;

  @Prop()
  amount: number;

  @Prop()
  date: string;
  
  @Prop()
  time: string;

  @Prop()
  originAccount: number;
}

export const transfersSchema = SchemaFactory.createForClass(transfers);