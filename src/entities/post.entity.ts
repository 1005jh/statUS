import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
