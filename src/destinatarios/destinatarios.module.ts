import { Module } from '@nestjs/common';
import { DestinatariosService } from './destinatarios.service';
import { DestinatariosController } from './destinatarios.controller';

@Module({
  controllers: [DestinatariosController],
  providers: [DestinatariosService]
})
export class DestinatariosModule {}
