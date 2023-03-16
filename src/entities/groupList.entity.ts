import { ScheduleEntity } from './schedule.entity';
import { PostImgEntity } from './post-img.entity';
import { ColorEntity } from './color.entity';
import { InviteEntity } from './invite.entity';
import { PostEntity } from './post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';
import { UserEntity } from './users.entity';
import { CommentEntity } from './comment.entity';

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

  @Column({ type: 'int', nullable: false })
  userId: number;
  @ManyToOne(() => UserEntity, (user) => user.groupLists)
  user: UserEntity;

  @OneToMany(() => GroupUserEntity, (groupUser) => groupUser.groupList)
  groupUsers: Promise<GroupUserEntity[]>;

  @OneToMany(() => PostEntity, (post) => post.groupList)
  posts: Promise<PostEntity[]>;

  @OneToMany(() => CommentEntity, (comment) => comment.groupList)
  comments: Promise<CommentEntity[]>;

  @OneToMany(() => InviteEntity, (invite) => invite.groupList)
  invites: Promise<InviteEntity[]>;

  @OneToMany(() => ColorEntity, (color) => color.groupList)
  colors: Promise<ColorEntity[]>;

  @OneToMany(() => PostImgEntity, (postImg) => postImg.groupList)
  postImgs: Promise<PostImgEntity[]>;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.groupList)
  schedules: Promise<ScheduleEntity[]>;
}
