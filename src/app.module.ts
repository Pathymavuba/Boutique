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

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([
      { name: 'client', schema: ClientSchema },
      { name: 'produit', schema: ProduitSchema },
    ]),
  ],
  controllers: [AppController, ClientController, ProduitController],
  providers: [AppService, ClientService, ProduitService],
})
export class AppModule {}
