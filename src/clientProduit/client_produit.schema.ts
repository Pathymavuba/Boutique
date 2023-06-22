import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type Clien_produitDocument = HydratedDocument<Client_produit>;

@Schema()
export class Client_produit {
  //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'client' })
  @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: 'client' })
  cli_id: string;
  @Prop({ type: mongoose.SchemaTypes.ObjectId, ref: 'produit' })
  produit_id: string;
}

export const CpSchema = SchemaFactory.createForClass(Client_produit);
