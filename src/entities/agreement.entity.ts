import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
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

  @OneToMany(() => SettledEntity, settled => settled.agreement, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  })
  settled: SettledEntity
}
