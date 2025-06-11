import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingSessionsService } from './billing-session.service';
import { BillingSessionsController } from './billing-session.controller';
import { BillingSession } from './billing-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BillingSession])],
  controllers: [BillingSessionsController],
  providers: [BillingSessionsService],
})
export class BillingSessionsModule {}
