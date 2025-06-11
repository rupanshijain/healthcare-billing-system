import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from './config.service';
import { PricingRuleSchema } from './schemas/pricing-rule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PricingRule', schema: PricingRuleSchema },
    ]),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
