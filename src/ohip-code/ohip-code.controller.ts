import { Controller, Get, Query } from '@nestjs/common';
import { OhipCodesService } from './ohip-code.service';

@Controller('ohip-codes')
export class OhipCodesController {
  constructor(private readonly ohipCodesService: OhipCodesService) {}

  @Get()
  findOne(@Query('serviceId') serviceId: string) {
    return this.ohipCodesService.findByService(serviceId);
  }
}
