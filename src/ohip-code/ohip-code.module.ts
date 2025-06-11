import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OhipCodesController } from './ohip-code.controller';
import { OhipCodesService } from './ohip-code.service';
import { OhipCodeSchema } from './schemas/ohip-code.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'OhipCode', schema: OhipCodeSchema }]),
  ],
  controllers: [OhipCodesController],
  providers: [OhipCodesService],
})
export class OhipCodesModule {}
