import { PostImgEntity } from './post-img.entity';
import { GroupUserEntity } from './groupUser.entity';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GroupListEntity } from './groupList.entity';
import { CommentEntity } from './comment.entity';
import { PostLikeEntity } from './postLike.entity';

@Entity({ name: 'POST' })
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 6400,
    nullable: true,
  })
  content: string;

  @Column({
    type: 'int',
  })
  category: number;

  @Column({
    type: 'int',
    default: 0,
  })
  commentCount: number;

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
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.posts)
  groupList: GroupListEntity;

  @Column({ type: 'int', nullable: false })
  groupUserId: number;
  @ManyToOne(() => GroupUserEntity, (groupUser) => groupUser.posts)
  groupUser: GroupUserEntity;

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: Promise<CommentEntity[]>;

  @OneToMany(() => PostLikeEntity, (postLike) => postLike.post)
  postLikes: Promise<PostLikeEntity[]>;

  @OneToMany(() => PostImgEntity, (postImg) => postImg.post)
  postimgs: Promise<PostImgEntity[]>;
}
