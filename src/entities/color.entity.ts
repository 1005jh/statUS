import { Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GroupListEntity } from './groupList.entity';

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

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.colors)
  groupList: GroupListEntity;
}
