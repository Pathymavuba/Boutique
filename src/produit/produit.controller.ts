import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { Produit } from './produit.schema';

@Controller()
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post('produit')
  async createProduit(@Res() response, @Body() createProduitDto: Produit) {
    const produit = await this.produitService.createProduit(createProduitDto);
    return response.json(produit);
  }
  @Get('produit')
  async readProduit() {
    return this.produitService.readProduit();
  }
}
