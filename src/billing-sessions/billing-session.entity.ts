import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

interface SelectedService {
  serviceId: string;
  quantity: number;
  overridePrice?: number;
  discountReason?: string;
}

@Entity()
export class BillingSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clinicId: string;

  @Column()
  patientId: string;

  @Column('jsonb')
  selectedServices: SelectedService[];

  @Column()
  totalAmount: number;

  @Column({ default: 'pending' })
  status: string;
}
