import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Client_produitService } from './client_produit.service';
import { Client_produit } from './client_produit.schema';

@Controller()
export class Client_produitController {
  constructor(private readonly cpService: Client_produitService) {}

  @Post('buy')
  async buyProduct(@Res() resposne, @Body() createcpDto: Client_produit) {
    const achat = await this.cpService.buyProduct(createcpDto);
    resposne.json(achat);
  }
  @Get('showcommande')
  async showCommande() {
    return this.cpService.showCommande();
  }
}
