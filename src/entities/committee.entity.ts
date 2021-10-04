import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SettledEntity } from './settled.entity'

@Entity('Committee') //comite
export class CommitteeEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidCommittee: string

  @Column('varchar', { nullable: false })
  committee: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToMany(() => SettledEntity, settled => settled.committee, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  settled: SettledEntity
}
