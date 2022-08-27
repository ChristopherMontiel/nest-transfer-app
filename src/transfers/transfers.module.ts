import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { transfers, transfersSchema } from './schema/transfers.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: transfers.name,
        schema: transfersSchema
      }
    ])
  ],
  controllers: [TransfersController],
  providers: [TransfersService]
})
export class TransfersModule {}
