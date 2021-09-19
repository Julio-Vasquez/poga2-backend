import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { SettledEntity } from './settled.entity'

@Entity('Agreement') //acuerdo
export class AgreementEntity {
  @PrimaryGeneratedColumn('uuid')
  uuidAgreement: string

  @Column('varchar', { nullable: false })
  agreement: string

  @CreateDateColumn({ type: 'timestamp' })
  createAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: Date

  @OneToOne(() => SettledEntity, settled => settled.agreement, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  settled: SettledEntity
}
