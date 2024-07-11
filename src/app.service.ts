import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const saludando: string = 'hello my name is andres';
    return 'Hello World!';
  }
}
