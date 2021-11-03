import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CNAB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  file: string;

  @Column()
  ident: string;

  @Column({ default: true })
  isActive: boolean;
}