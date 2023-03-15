import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'GROUPLIST' })
export class GroupListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  groupName: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  groupImg: string;

  @Column({
    type: 'int',
    nullable: true,
    default: 0,
  })
  userCount: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
