import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('state')
export class StateEntity {
  @PrimaryGeneratedColumn('increment')
  auState: number

  @Column('varchar', { nullable: false })
  state: string
}
