import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { recipients, recipientsDocument } from './schema/recipients.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipientsService {
  
  constructor(
    @InjectModel(recipients.name) private recipientsModule: Model<recipientsDocument>,
  ) {}
  
  async create(createRecipientDto: CreateRecipientDto) {

    const recipientCreated = await this.recipientsModule.create(createRecipientDto);

    return recipientCreated;
  }

  async findAll() {
    const list = await this.recipientsModule.find({});

    return list;
  }

  async findOne(id: string) {
    const recipient = await this.recipientsModule.find({ _id: id });
    return recipient;
    //return `This action returns a #${id} recipient`;
  }

  update(id: number, updateRecipientDto: UpdateRecipientDto) {
    return `This action updates a #${id} recipient`;
  }

  async remove(id: string) {
    const deletedRecipient = await this.recipientsModule.findByIdAndRemove({ _id: id })
    return deletedRecipient;
    //return `This action removes a #${id} recipient`;
  }
}
