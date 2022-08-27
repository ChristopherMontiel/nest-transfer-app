import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecipientsModule } from './recipients/recipients.module';
import { TransfersModule } from './transfers/transfers.module';

@Module({
  //imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  imports: [MongooseModule.forRoot('mongodb://mongo:w5b8Ta2Y5KtM6W0iEA0o@containers-us-west-18.railway.app:6613'),
  RecipientsModule,
  TransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
