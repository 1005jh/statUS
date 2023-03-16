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
import { GroupListEntity } from './groupList.entity';
import { GroupUserEntity } from './groupUser.entity';
import { CommentLikeEntity } from './commentLike.entity';

@Entity({ name: 'COMMENT' })
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
  })
  comment: string;

  @Column({
    type: 'int',
    default: 0,
  })
  likeCount: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.comments)
  groupList: GroupListEntity;

  @Column({ type: 'int', nullable: false })
  groupUserId: number;
  @ManyToOne(() => GroupUserEntity, (groupUser) => groupUser.comments)
  groupUser: GroupUserEntity;

  @Column({ type: 'int', nullable: false })
  postId: number;
  @ManyToOne(() => PostEntity, (post) => post.comments)
  post: PostEntity;

  @OneToMany(() => CommentLikeEntity, (commentLike) => commentLike.comment)
  commentLikes: Promise<CommentLikeEntity[]>;
}
