import { Schema } from 'mongoose';

export const OhipCodeSchema = new Schema({
  serviceId: String,
  code: String,
  description: String,
});
