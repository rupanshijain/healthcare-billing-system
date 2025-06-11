import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';
import { Service } from './services.enitity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }

  @Post()
  create(@Body() service: Service): Promise<Service> {
    return this.servicesService.create(service);
  }
}
