import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { ModalityEntity } from './modality.entity'
import { PersonEntity } from './person.entity'
import { SettledEntity } from './settled.entity'
import { StateEntity } from './state.entity'

@Entity('Poga2') //opcion de grado
export class Poga2Entity {
  @PrimaryGeneratedColumn('uuid')
  uuidPoga2: string

  @Column('varchar', { nullable: false })
  title: string

  @Column('text', { nullable: true })
  notes: string

  @Column('date', { nullable: false })
  dateStart: string

  @Column('date', { nullable: false })
  dateEnd: string

  @Column('date', { nullable: true })
  dateSustentation: string

  @Column('date', { nullable: false })
  dateGrade: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToOne(() => StateEntity, state => state.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'fkState' })
  state: StateEntity

  @OneToOne(() => ModalityEntity, modality => modality.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'fkModality' })
  modality: ModalityEntity

  @OneToOne(() => SettledEntity, settled => settled.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'fkSettled' })
  settled: SettledEntity

  @OneToOne(() => PersonEntity, person => person.director, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'director' })
  director: PersonEntity

  @OneToOne(() => PersonEntity, person => person.studentOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'studentOne' })
  studentOne: PersonEntity

  @OneToOne(() => PersonEntity, person => person.studentTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'studentTwo' })
  studentTwo: PersonEntity

  @OneToOne(() => PersonEntity, person => person.juryOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'juryOne' })
  juryOne: Poga2Entity

  @OneToOne(() => PersonEntity, person => person.juryTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'juryTwo' })
  juryTwo: Poga2Entity

  @OneToOne(() => PersonEntity, person => person.juryThree, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'juryThree' })
  juryThree: Poga2Entity
}
