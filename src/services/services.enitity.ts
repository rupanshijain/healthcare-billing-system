import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  clinicId: string;
}
