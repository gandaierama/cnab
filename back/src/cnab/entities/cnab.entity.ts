import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Cnab {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ident: string;

  @Column()
  file: string;

  @Column({ default: true })
  isActive: boolean;
}