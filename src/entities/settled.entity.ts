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

@Entity('Settled') //radicado
export class SettledEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidSettled: string

  @Column('varchar', { nullable: false })
  settled: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
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
