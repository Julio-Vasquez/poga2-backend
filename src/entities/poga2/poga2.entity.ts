import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('poga2')
export class Poga2Entity {
  @PrimaryGeneratedColumn('increment')
  auPoga2: number

  @Column('varchar', { nullable: false, length: 20 })
  code: string

  @Column('varchar', { nullable: false })
  title: string

  @Column('text', { nullable: true })
  notes: string

  dateStart: string
  dateEnd: string
  dateSustentation: string
  dateGrade: string
}
