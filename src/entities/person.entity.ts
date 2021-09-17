import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Poga2Entity } from './poga2.entity'
import { RoleEntity } from './role.entity'

@Entity('PERSONA')
@Index(['phone', 'identification'])
export class PersonEntity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_PERSONA' })
  auPerson: number

  @Column('bigint', { nullable: false, name: 'IDENTIFICACION' })
  identification: number

  @Column('varchar', { nullable: false, name: 'NOMBRE' })
  name: string

  @Column('varchar', { nullable: false, name: 'CORREO_ELECTRONICO' })
  email: string

  @Column('bigint', { nullable: false, name: 'CELULAR' })
  phone: number

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @ManyToOne(() => RoleEntity, role => role.person, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_ROL' })
  role: RoleEntity

  @OneToOne(() => Poga2Entity, poga2 => poga2.director, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  director: Poga2Entity

  @OneToOne(() => Poga2Entity, poga2 => poga2.studentOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  studentOne: Poga2Entity

  @OneToOne(() => Poga2Entity, poga2 => poga2.studentTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  studentTwo: Poga2Entity

  @OneToOne(() => Poga2Entity, poga2 => poga2.juryOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryOne: Poga2Entity

  @OneToOne(() => Poga2Entity, poga2 => poga2.juryTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryTwo: Poga2Entity

  @OneToOne(() => Poga2Entity, poga2 => poga2.juryThree, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  juryThree: Poga2Entity
}
