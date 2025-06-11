import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillingSessionsService } from './billing-session.service';
import { BillingSession } from './billing-session.entity';

@Controller('billing-sessions')
export class BillingSessionsController {
  constructor(
    private readonly billingSessionsService: BillingSessionsService,
  ) {}

  @Get()
  findAll(): Promise<BillingSession[]> {
    return this.billingSessionsService.findAll();
  }

  @Post()
  create(@Body() session: BillingSession): Promise<BillingSession> {
    return this.billingSessionsService.create(session);
  }
}
