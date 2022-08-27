import { Module } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { RecipientsController } from './recipients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { recipients, recipientsSchema } from './schema/recipients.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: recipients.name,
        schema: recipientsSchema
      }
    ])
  ],
  controllers: [RecipientsController],
  providers: [RecipientsService]
})
export class RecipientsModule {}
