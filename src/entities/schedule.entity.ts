import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'SCHEDULE' })
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 24,
    nullable: false,
  })
  start: string;

  @Column({
    type: 'varchar',
    length: 24,
    nullable: false,
  })
  end: string;

  @Column({
    type: 'varchar',
    length: 12,
    nullable: false,
  })
  color: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
