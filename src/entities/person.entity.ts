import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'
import { RoleEntity } from './role.entity'

@Entity('Person') //persona
@Index(['phone', 'identification'])
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidPerson: string

  @Column('bigint', { nullable: false })
  identification: number

  @Column('varchar', { nullable: false })
  name: string

  @Column('varchar', { nullable: false })
  email: string

  @Column('bigint', { nullable: false })
  phone: number

  @Column('text', { nullable: true })
  urlPhoto: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @ManyToOne(() => RoleEntity, role => role.person, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'role' })
  role: RoleEntity

  @OneToMany(() => Poga2Entity, poga2 => poga2.director, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  director: Poga2Entity

  @OneToMany(() => Poga2Entity, poga2 => poga2.studentOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  studentOne: Poga2Entity

  @OneToMany(() => Poga2Entity, poga2 => poga2.studentTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  studentTwo: Poga2Entity

  @OneToMany(() => Poga2Entity, poga2 => poga2.juryOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryOne: Poga2Entity

  @OneToMany(() => Poga2Entity, poga2 => poga2.juryTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryTwo: Poga2Entity

  @OneToMany(() => Poga2Entity, poga2 => poga2.juryThree, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryThree: Poga2Entity
}
