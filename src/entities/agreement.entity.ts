import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SettledEntity } from './settled.entity'

@Entity('ACUERDO')
export class AgreementEntity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_ACUERDO' })
  auAgreement: number

  @Column('varchar', { nullable: false, name: 'ACUERDO_OPCION_GRADO' })
  agreement: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => SettledEntity, settled => settled.agreement, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  settled: SettledEntity
}
