import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'GROUPUSER' })
export class GroupUserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  groupUserNickname: string;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  groupAvatarImg: string;

  @Column({
    type: 'int',
    default: 0,
  })
  status: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
  })
  statusMessage: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
