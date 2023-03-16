import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';
import { PostEntity } from './post.entity';

@Entity({ name: 'POSTLIKE' })
export class PostLikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', nullable: false })
  groupUserId: number;
  @ManyToOne(() => GroupUserEntity, (groupUser) => groupUser.postLikes)
  groupUser: GroupUserEntity;

  @Column({ type: 'int', nullable: false })
  postId: number;
  @ManyToOne(() => PostEntity, (post) => post.postLikes)
  post: PostEntity;
}
