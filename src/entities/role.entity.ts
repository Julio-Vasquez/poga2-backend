import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { PersonEntity } from './person.entity'

@Entity('ROL')
export class RoleEntity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_ROL' })
  auRole: number

  @Column('varchar', { nullable: false, name: 'ROL', unique: true })
  role: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToMany(() => PersonEntity, person => person.role, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  person: PersonEntity[]
}
