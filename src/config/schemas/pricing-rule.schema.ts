import { Schema } from 'mongoose';

export const PricingRuleSchema = new Schema({
  clinicId: String,
  serviceId: String,
  ruleType: String, // discount | override
  value: Number,
  description: String,
});
