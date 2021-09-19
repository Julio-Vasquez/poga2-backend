import { Module } from '@nestjs/common'

import { CommonModule } from './modules/@common/@common.module'
import { RoleModule } from './modules/role/role.module'
import { StateModule } from './modules/state/state.module'

@Module({
  imports: [CommonModule, RoleModule, StateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
