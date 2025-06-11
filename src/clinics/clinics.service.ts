import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from './clinics.entity';

@Injectable()
export class ClinicsService {
  constructor(
    @InjectRepository(Clinic)
    private clinicRepository: Repository<Clinic>,
  ) {}

  findAll(): Promise<Clinic[]> {
    return this.clinicRepository.find();
  }

  create(clinic: Clinic): Promise<Clinic> {
    return this.clinicRepository.save(clinic);
  }
}
