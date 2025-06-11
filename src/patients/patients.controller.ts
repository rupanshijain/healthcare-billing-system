import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientService } from './patients.service';
import { Patient } from './patients.entity';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Post()
  create(@Body() patient: Patient): Promise<Patient> {
    return this.patientService.create(patient);
  }
}
