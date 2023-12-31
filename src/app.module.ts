import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './client/client.schema';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { ProduitSchema } from './produit/produit.schema';
import { ProduitService } from './produit/produit.service';
import { ProduitController } from './produit/produit.controller';
import { CpSchema } from './clientProduit/client_produit.schema';
import { Client_produitController } from './clientProduit/client_produit.controler';
import { Client_produitService } from './clientProduit/client_produit.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([
      { name: 'client', schema: ClientSchema },
      { name: 'produit', schema: ProduitSchema },
      { name: 'client_produit', schema: CpSchema },
    ]),
  ],
  controllers: [
    AppController,
    ClientController,
    ProduitController,
    Client_produitController,
  ],
  providers: [AppService, ClientService, ProduitService, Client_produitService],
})
export class AppModule {}
