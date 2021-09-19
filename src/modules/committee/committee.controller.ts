import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateCommitteeService, FindCommitteeService } from './services'

@Controller('committee')
export class CommitteeController {
  constructor(
    private readonly createCommitteeService: CreateCommitteeService,
    private readonly findCommitteeService: FindCommitteeService
  ) {}

  @Get('/')
  public async findAllCommittees() {
    return await this.findCommitteeService.findAllCommittees()
  }

  @Post('create')
  public async createCommittee(@Body('committee') committee: string) {
    return await this.createCommitteeService.createCommittee(committee)
  }
}
