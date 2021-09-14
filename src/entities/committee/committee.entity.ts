import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('committee')
export class CommitteeEntity {
  @PrimaryGeneratedColumn('increment')
  auCommittee: number

  @Column('varchar', { nullable: false })
  committee: string
}
