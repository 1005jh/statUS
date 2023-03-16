import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GroupListEntity } from './groupList.entity';
import { PostEntity } from './post.entity';

@Entity({ name: 'POSTIMG' })
export class PostImgEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 256,
    nullable: true,
  })
  postImg: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'int', nullable: false })
  groupListId: number;
  @ManyToOne(() => GroupListEntity, (groupList) => groupList.postImgs)
  groupList: GroupListEntity;

  @Column({ type: 'int', nullable: false })
  postId: number;
  @ManyToOne(() => PostEntity, (post) => post.postimgs)
  post: PostEntity;
}
