import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'

@Entity('MODALIDAD')
export class ModalityEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'CODIGO_MODALIDAD' })
  auModality: string

  @Column('varchar', { nullable: false, name: 'MODALIDAD' })
  modality: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => Poga2Entity, poga2 => poga2.modality, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
