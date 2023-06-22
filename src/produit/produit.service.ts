import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produit, ProduitDocument } from './produit.schema';

@Injectable()
export class ProduitService {
  constructor(
    @InjectModel('produit')
    private readonly produitModel: Model<ProduitDocument>,
  ) {}

  /**
   * @param createProduitDto Produit
   * @returns
   */
  async createProduit(createProduitDto: Produit): Promise<string | Produit> {
    try {
      const oldProduit = await this.produitModel.findOne({
        libelle: createProduitDto.libelle,
      });
      if (oldProduit)
        return `le produit ${createProduitDto.libelle} existe déjà`;
      return await this.produitModel.create(createProduitDto);
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * @returns
   */
  async readProduit() {
    try {
      const produits = await this.produitModel.find();
      if (produits.length < 1) return null;
      return produits;
    } catch (error) {
      console.log(error);
    }
  }
}
