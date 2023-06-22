import { Body, Controller, Post, Res } from '@nestjs/common';
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
}
