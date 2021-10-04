import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { AgreementEntity } from './agreement.entity'
import { CommitteeEntity } from './committee.entity'
import { Poga2Entity } from './poga2.entity'

@Entity('Settled') //radicado
@Index(['record'])
export class SettledEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidSettled: string

  @Column('date', { nullable: false })
  settledDate: string ///fecha radicado

  @Column('varchar', { nullable: false, unique: true })
  record: string //acta inscripcion

  @Column('date', { nullable: false })
  inscriptionDeadline: string

  @Column('date', { nullable: false })
  inscriptionDate: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @ManyToOne(() => CommitteeEntity, committee => committee.settled, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'committee' })
  committee: CommitteeEntity

  @ManyToOne(() => AgreementEntity, agreement => agreement.settled, {
    nullable: false,
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn({ name: 'agreement' })
  agreement: AgreementEntity

  @OneToMany(() => Poga2Entity, poga2 => poga2.settled, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
