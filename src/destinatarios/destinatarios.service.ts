import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDestinatarioDto } from './dto/create-destinatario.dto';
import { UpdateDestinatarioDto } from './dto/update-destinatario.dto';
import { destinatarios, destinatariosDocument } from './schema/destinatarios.schema';
import { Model } from 'mongoose';

@Injectable()
export class DestinatariosService {
  
  constructor(
    @InjectModel(destinatarios.name) private destinatariosModule: Model<destinatariosDocument>,
  ) {}
  
  async create(createDestinatarioDto: CreateDestinatarioDto) {

    const destinatarioCreated = await this.destinatariosModule.create(createDestinatarioDto)

    return destinatarioCreated;
  }

  async findAll() {
    const list = await this.destinatariosModule.find({})

    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} destinatario`;
  }

  update(id: number, updateDestinatarioDto: UpdateDestinatarioDto) {
    return `This action updates a #${id} destinatario`;
  }

  remove(id: number) {
    return `This action removes a #${id} destinatario`;
  }
}
