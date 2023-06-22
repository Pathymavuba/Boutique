import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type ProduitDocument = HydratedDocument<Produit> | Document;

@Schema()
export class Produit {
  @Prop({ required: true })
  libelle: string;
  @Prop()
  prix: number;
}

export const ProduitSchema = SchemaFactory.createForClass(Produit);
