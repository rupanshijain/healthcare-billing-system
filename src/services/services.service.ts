import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './services.enitity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find();
  }

  create(service: Service): Promise<Service> {
    return this.serviceRepository.save(service);
  }
}
