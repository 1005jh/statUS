import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupListEntity } from './groupList.entity';
import { GroupUserEntity } from './groupUser.entity';

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

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.schedules)
  groupList: GroupListEntity;

  @Column({ type: 'int', nullable: false })
  groupUserId: number;
  @ManyToOne(() => GroupUserEntity, (groupUser) => groupUser.schedules)
  groupUser: GroupUserEntity;
}
