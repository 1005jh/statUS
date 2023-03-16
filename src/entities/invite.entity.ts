import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupListEntity } from './groupList.entity';

@Entity({ name: 'INVITE' })
export class InviteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.invites)
  groupList: GroupListEntity;
}
