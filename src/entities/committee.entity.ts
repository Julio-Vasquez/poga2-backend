import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SettledEntity } from './settled.entity'

@Entity('COMITE')
export class CommitteeEntity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_COMITE' })
  auCommittee: number

  @Column('varchar', { nullable: false, name: 'COMITE' })
  committee: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => SettledEntity, settled => settled.committee, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  settled: SettledEntity
}
