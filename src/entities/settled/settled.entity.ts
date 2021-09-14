import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('settled')
export class SettledEntity {
  @PrimaryGeneratedColumn('increment')
  auSettled: number

  @Column('varchar', { nullable: false })
  settled: string
}
