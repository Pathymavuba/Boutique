import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProduitDocument = HydratedDocument<Produit>;

@Schema()
export class Produit {
  @Prop({ required: true })
  libelle: string;
  @Prop()
  prix: number;
}

export const ProduitSchema = SchemaFactory.createForClass(Produit);
