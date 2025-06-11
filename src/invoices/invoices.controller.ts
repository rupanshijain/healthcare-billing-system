import { Controller, Post, Body } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from './invoices.entity';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post('generate')
  generate(@Body('sessionId') sessionId: string) {
    return this.invoicesService.generateInvoice(sessionId);
  }
}
