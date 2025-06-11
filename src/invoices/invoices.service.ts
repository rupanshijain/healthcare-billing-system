import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './invoices.entity';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async generateInvoice(sessionId: string) {
    // Simulated logic to build invoice from session
    const invoice = this.invoiceRepository.create({
      sessionId,
      items: [
        {
          serviceId: 'srv1',
          basePrice: 100,
          finalPrice: 90,
          quantity: 2,
          discountReason: 'Senior Discount',
        },
      ],
      totalBasePrice: 200,
      totalFinalPrice: 180,
      appliedDiscounts: ['Senior Discount'],
    });

    return this.invoiceRepository.save(invoice);
  }
}
