import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'COLOR' })
export class ColorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 24,
  })
  color: string;

  @Column({ type: 'varchar', length: 24 })
  content: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
