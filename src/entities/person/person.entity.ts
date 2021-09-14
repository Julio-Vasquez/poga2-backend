import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('person')
export class PersonEntity {
  @PrimaryGeneratedColumn('increment')
  auPerson: number

  @Column('bigint', { nullable: false })
  identification: number

  @Column('varchar', { nullable: false })
  name: string

  @Column('varchar', { nullable: false })
  email: string

  @Column('int', { nullable: false })
  phone: number
}
