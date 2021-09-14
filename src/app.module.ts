import { Module } from '@nestjs/common'

import { CommonModule } from './modules/@common/@common.module'
import { RoleModule } from './modules/role/role.module'

@Module({
  imports: [CommonModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
