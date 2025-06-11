import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OhipCodeSchema } from './schemas/ohip-code.schema';

@Injectable()
export class OhipCodesService {
  constructor(
    @InjectModel('OhipCode') private readonly ohipCodeModel: Model<any>,
  ) {}

  async findByService(serviceId: string) {
    return this.ohipCodeModel.findOne({ serviceId });
  }
}
