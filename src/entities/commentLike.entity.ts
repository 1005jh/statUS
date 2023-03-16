import { CommentEntity } from './comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupUserEntity } from './groupUser.entity';
@Entity({ name: 'COMMENTLIKE' })
export class CommentLikeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', nullable: false })
  groupUserId: number;
  @ManyToOne(() => GroupUserEntity, (groupUser) => groupUser.commentLikes)
  groupUser: GroupUserEntity;

  @Column({ type: 'int', nullable: false })
  commentId: number;
  @ManyToOne(() => CommentEntity, (comment) => comment.commentLikes)
  comment: CommentEntity;
}
