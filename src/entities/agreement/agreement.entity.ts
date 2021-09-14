import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('agreement')
export class AgreementEntity {
  @PrimaryGeneratedColumn('increment')
  auAgreement: number

  @Column('varchar', { nullable: false })
  agreement: string
}
