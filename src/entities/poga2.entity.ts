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

@Entity('OPCION_DE_GRADO')
export class Poga2Entity {
  @PrimaryGeneratedColumn('increment', { name: 'CODIGO_OPCION_DE_GRADO' })
  auPoga2: number

  @Column('varchar', { nullable: false, name: 'TITULO_OPCION_DE_GRADO' })
  title: string

  @Column('text', { nullable: true, name: 'NOTAS' })
  notes: string

  @Column('date', { nullable: false, name: 'FECHA_INICIAL' })
  dateStart: string

  @Column('date', { nullable: false, name: 'FECHA_FINAL' })
  dateEnd: string

  @Column('date', { nullable: true, name: 'FECHA_SUSTENTACION' })
  dateSustentation: string

  @Column('date', { nullable: false, name: 'FECHA_GRADUACION' })
  dateGrade: string

  @CreateDateColumn({ type: 'timestamp', name: 'CREADO' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp', name: 'ACTUALIZADO' })
  updateAt: Date

  @OneToOne(() => StateEntity, state => state.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_ESTADO' })
  state: StateEntity

  @OneToOne(() => ModalityEntity, modality => modality.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_MODALIDAD' })
  modality: ModalityEntity

  @OneToOne(() => SettledEntity, settled => settled.poga2, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'CODIGO_RADICADO' })
  settled: SettledEntity

  @OneToOne(() => PersonEntity, person => person.director, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'DIRECTOR' })
  director: PersonEntity

  @OneToOne(() => PersonEntity, person => person.studentOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'ESTUDIANTE_1' })
  studentOne: PersonEntity

  @OneToOne(() => PersonEntity, person => person.studentTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'ESTUDIANTE_2' })
  studentTwo: PersonEntity

  @OneToOne(() => PersonEntity, person => person.juryOne, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'JURADO_1' })
  juryOne: Poga2Entity

  @OneToOne(() => PersonEntity, person => person.juryTwo, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'JURADO_2' })
  juryTwo: Poga2Entity

  @OneToOne(() => PersonEntity, person => person.juryThree, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'JURADO_3' })
  juryThree: Poga2Entity
}