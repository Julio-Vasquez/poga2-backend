import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { AgreementEntity } from './agreement.entity'
import { CommitteeEntity } from './committee.entity'
import { Poga2Entity } from './poga2.entity'

@Entity('RADICADO')
export class SettledEntity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_RADICADO' })
  auSettled: number

  @Column('varchar', { nullable: false, name: 'RADICADO' })
  settled: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => CommitteeEntity, committee => committee.settled, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_COMITE' })
  committee: CommitteeEntity

  @OneToOne(() => AgreementEntity, agreement => agreement.settled, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_ACUERDO' })
  agreement: AgreementEntity

  @OneToOne(() => Poga2Entity, poga2 => poga2.settled, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
