import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sessionId: string;

  @Column('jsonb')
  items: any;

  @Column()
  totalBasePrice: number;

  @Column()
  totalFinalPrice: number;

  @Column('jsonb')
  appliedDiscounts: string[];
}
