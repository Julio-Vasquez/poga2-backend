import { Module } from '@nestjs/common'

import { CommonModule } from './modules/@common/@common.module'
import { AgreementModule } from './modules/agreement/agreement.module'
import { CommitteeModule } from './modules/committee/committee.module'
import { ModalityModule } from './modules/modality/modality.module'
import { PersonModule } from './modules/person/person.module'
import { Poga2Module } from './modules/poga2/poga2.module'
import { RoleModule } from './modules/role/role.module'
import { SettledModule } from './modules/settled/settled.module'
import { StateModule } from './modules/state/state.module'

@Module({
  imports: [
    CommonModule,
    AgreementModule,
    CommitteeModule,
    ModalityModule,
    PersonModule,
    Poga2Module,
    RoleModule,
    SettledModule,
    StateModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
