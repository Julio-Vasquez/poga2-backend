import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { PersonEntity } from './person.entity'

@Entity('Role') //rol
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidRole: string

  @Column('varchar', { nullable: false, unique: true })
  role: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToMany(() => PersonEntity, person => person.role, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  person: PersonEntity[]
}
