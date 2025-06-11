import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { Clinic } from './clinics.entity';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Get()
  findAll(): Promise<Clinic[]> {
    return this.clinicsService.findAll();
  }

  @Post()
  create(@Body() clinic: Clinic): Promise<Clinic> {
    return this.clinicsService.create(clinic);
  }
}
