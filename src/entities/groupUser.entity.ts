import { CommentLikeEntity } from './commentLike.entity';
import { PostLikeEntity } from './postLike.entity';
import { ScheduleEntity } from './schedule.entity';
import { GroupListEntity } from './groupList.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './users.entity';
import { PostEntity } from './post.entity';
import { CommentEntity } from './comment.entity';

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

  @Column({ type: 'int', nullable: false })
  userId: number;
  @ManyToOne(() => UserEntity, (user) => user.groupUsers)
  user: UserEntity;

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.groupUsers)
  groupList: GroupListEntity;

  @OneToMany(() => PostEntity, (post) => post.groupUser)
  posts: Promise<PostEntity[]>;

  @OneToMany(() => CommentEntity, (comment) => comment.groupUser)
  comments: Promise<CommentEntity[]>;

  @OneToMany(() => ScheduleEntity, (schedule) => schedule.groupUser)
  schedules: Promise<ScheduleEntity[]>;

  @OneToMany(() => PostLikeEntity, (postLike) => postLike.groupUser)
  postLikes: Promise<PostLikeEntity[]>;

  @OneToMany(() => CommentLikeEntity, (commentLike) => commentLike.groupUser)
  commentLikes: Promise<CommentLikeEntity[]>;
}
