import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create_cleint.dto';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('client')
  async createClient(
    @Res() response,
    @Body() createClientDto: CreateClientDto,
  ) {
    const client = await this.clientService.createClient(createClientDto);

    return response.json({ client });
  }
  @Get('client')
  async getClient() {
    return this.clientService.getClient();
  }
  @Get('client/:id')
  async readOneClient(@Param('id') id: string) {
    return this.clientService.readOneClient(id);
  }
  @Put('client/:id')
  async updateClient(@Param('id') id: string, @Body() data: CreateClientDto) {
    return { nouveauClient: this.clientService.updateClient(id, data) };
  }
  @Delete('client/:id')
  async deleteClient(@Param('id') id: string) {
    return this.clientService.deleteClient(id);
  }
}
