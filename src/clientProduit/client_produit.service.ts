import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clien_produitDocument, Client_produit } from './client_produit.schema';

@Injectable()
export class Client_produitService {
  constructor(
    @InjectModel('client_produit')
    private readonly cpModel: Model<Clien_produitDocument>,
  ) {}

  /**
   *
   * @param createCpDito Client_produit
   * @returns Client_produit|String
   */
  async buyProduct(createCpDito: Client_produit): Promise<Client_produit> {
    try {
      return await this.cpModel.create(createCpDito);
    } catch (error) {
      console.log(error);
    }
  }
  /**
   *
   * @returns Promise|null
   */
  async showCommande() {
    try {
      const commandes = await this.cpModel
        .find({})
        .populate([{ path: 'cli_id' }, { path: 'produit_id' }]);
      if (commandes.length < 1) return null;
      return commandes;
    } catch (error) {
      console.log(error);
    }
  }
}
