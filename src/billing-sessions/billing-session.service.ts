import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingSession } from './billing-session.entity';

@Injectable()
export class BillingSessionsService {
  constructor(
    @InjectRepository(BillingSession)
    private billingSessionRepository: Repository<BillingSession>,
  ) {}

  findAll(): Promise<BillingSession[]> {
    return this.billingSessionRepository.find();
  }

  create(session: BillingSession): Promise<BillingSession> {
    return this.billingSessionRepository.save(session);
  }
}
