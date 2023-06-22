import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './client/client.schema';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB),
    MongooseModule.forFeature([{ name: 'client', schema: ClientSchema }]),
  ],
  controllers: [AppController, ClientController],
  providers: [AppService, ClientService],
})
export class AppModule {}
