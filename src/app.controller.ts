import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}
  // URI + Méthode => Je vais appeler getHello si j'ai
  // La méthode Get et l'URI ''
  @Get('')
  getHello(): string {
    return 'Hello World :D';
  }
}
