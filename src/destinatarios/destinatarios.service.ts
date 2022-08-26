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

    const destinatarioCreated = await this.destinatariosModule.create(createDestinatarioDto);

    return destinatarioCreated;
  }

  async findAll() {
    const list = await this.destinatariosModule.find({});

    return list;
  }

  async findOne(id: string) {
    const destinatario = await this.destinatariosModule.find({ _id: id });
    return destinatario;
    //return `This action returns a #${id} destinatario`;
  }

  update(id: number, updateDestinatarioDto: UpdateDestinatarioDto) {
    return `This action updates a #${id} destinatario`;
  }

  async remove(id: string) {
    const deletedDestinatario = await this.destinatariosModule.findByIdAndRemove({ _id: id })
    return deletedDestinatario;
    //return `This action removes a #${id} destinatario`;
  }
}
