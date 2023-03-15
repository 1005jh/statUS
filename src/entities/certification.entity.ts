import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CERTIFICATION' })
export class CertificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  certificationNum: number;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  certificationCheck: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
