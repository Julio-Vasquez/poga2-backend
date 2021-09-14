import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('modality')
export class ModalityEntity {
  @PrimaryGeneratedColumn('increment')
  auModality: number

  @Column('varchar', { nullable: false })
  modality: string
}
