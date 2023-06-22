import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './client.schema';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create_cleint.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('client')
    private readonly clientModel: Model<ClientDocument>,
  ) {}
  /**
   * @param createClientDto CreateClientDto
   * @returns
   */

  async createClient(
    createClientDto: CreateClientDto,
  ): Promise<string | Client | object> {
    const oldClient = await this.clientModel.findOne({
      name: createClientDto.name,
    });
    if (oldClient) return 'client is already created';
    const client = new this.clientModel(createClientDto);
    return client.save();
  }
}
