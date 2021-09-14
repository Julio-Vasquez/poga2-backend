import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn('increment')
  auRole: number

  @Column('varchar', { nullable: false })
  role: string
}
