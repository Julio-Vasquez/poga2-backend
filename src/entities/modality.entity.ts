import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'

@Entity('Modality') //modalidad
export class ModalityEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidModality: string

  @Column('varchar', { nullable: false, unique: true })
  modality: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToMany(() => Poga2Entity, poga2 => poga2.modality, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
