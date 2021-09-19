import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'

@Entity('State')
export class StateEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidState: string

  @Column('varchar', { nullable: false, unique: true })
  state: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToOne(() => Poga2Entity, poga2 => poga2.state, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  poga2: Poga2Entity
}
