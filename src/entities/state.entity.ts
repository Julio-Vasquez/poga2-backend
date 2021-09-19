import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'

@Entity('ESTADO')
export class StateEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'CODIGO_ESTADO' })
  auState: string

  @Column('varchar', { nullable: false, name: 'ESTADO' })
  state: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => Poga2Entity, poga2 => poga2.state, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
