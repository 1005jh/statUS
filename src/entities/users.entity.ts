import { GroupListEntity } from './groupList.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';

@Entity({ name: 'USER' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  password!: string;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    unique: true,
  })
  nickname!: string | undefined;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  refreshToken?: string | undefined;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  avatarImg: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  currentPage: number;

  @Column({
    type: 'varchar',
    length: 64,
    nullable: true,
  })
  snsId: string;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: true,
  })
  provider: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => GroupListEntity, (groupList) => groupList.user)
  groupLists: Promise<GroupListEntity[]>;

  @OneToMany(() => GroupUserEntity, (groupUser) => groupUser.user)
  groupUsers: Promise<GroupUserEntity[]>;
}
