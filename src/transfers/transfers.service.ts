import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { transfers, transfersDocument } from './schema/transfers.schema';
import { Model } from 'mongoose';

@Injectable()
export class TransfersService {

  constructor(
    @InjectModel(transfers.name) 
    private transfersModule: Model<transfersDocument>,
  ) {}

  async create(createTransferDto: CreateTransferDto) {

    const transferCreated = await this.transfersModule.create(createTransferDto);
    
    return transferCreated;
  }

  async findAll() {
    const list = await this.transfersModule.find({});
    
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} transfer`;
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return `This action updates a #${id} transfer`;
  }

  async remove(id: string) {
    const deletedTransfer = await this.transfersModule.findByIdAndRemove({ _id: id })
    return deletedTransfer;
    //return `This action removes a #${id} transfer`;
  }
}
