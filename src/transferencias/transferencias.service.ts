import { Injectable } from '@nestjs/common';
import { CreateTransferenciaDto } from './dto/create-transferencia.dto';
import { UpdateTransferenciaDto } from './dto/update-transferencia.dto';

@Injectable()
export class TransferenciasService {
  create(createTransferenciaDto: CreateTransferenciaDto) {
    return 'This action adds a new transferencia';
  }

  findAll() {
    return `This action returns all transferencias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferencia`;
  }

  update(id: number, updateTransferenciaDto: UpdateTransferenciaDto) {
    return `This action updates a #${id} transferencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferencia`;
  }
}
