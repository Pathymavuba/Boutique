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
  /**
   * @returns
   */
  async getClient() {
    return this.clientModel
      .find()
      .then((clients) => {
        if (clients.length < 1) return 'no clients found';
        else return clients;
      })
      .catch((err) => console.log(err));
  }
  /**
   * @param id String
   * @returns
   */
  async readOneClient(id: string) {
    return this.clientModel
      .findById({ _id: id })
      .then(function (client) {
        if (!client) return `client with id ${id} does not exist`;
        else return client;
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  /**
   *
   * @param id String
   * @param data CreateClientDto
   */
  async updateClient(id: string, data: CreateClientDto) {
    return this.clientModel.findByIdAndUpdate(id, data, { new: true });
  }
  /**
   *  @param id String
   */

  async deleteClient(id: string) {
    return this.clientModel.deleteOne({ _id: id });
  }
}
