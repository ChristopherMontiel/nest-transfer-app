import { Module } from '@nestjs/common';
import { DestinatariosService } from './destinatarios.service';
import { DestinatariosController } from './destinatarios.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { destinatarios, destinatariosSchema } from './schema/destinatarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: destinatarios.name,
        schema: destinatariosSchema
      }
    ])
  ],
  controllers: [DestinatariosController],
  providers: [DestinatariosService]
})
export class DestinatariosModule {}
