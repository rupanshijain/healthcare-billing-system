import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PricingRuleSchema } from './schemas/pricing-rule.schema';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel('PricingRule') private readonly pricingRuleModel: Model<any>,
  ) {}

  async getPricingRules(clinicId: string) {
    return this.pricingRuleModel.find({ clinicId });
  }
}
