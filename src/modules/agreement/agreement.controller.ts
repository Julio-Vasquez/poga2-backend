import { Body, Controller, Get, Post } from '@nestjs/common'

import { CreateAgreementService, FindAgreementService } from './services'

@Controller('agreement')
export class AgreementController {
  constructor(
    private readonly createAgreementaService: CreateAgreementService,
    private readonly findAgreementService: FindAgreementService
  ) {}

  @Get('list')
  public async findAllAgreement() {
    return await this.findAgreementService.findAllAgreement()
  }

  @Post('create')
  public async createAgreement(@Body('agreement') agreement: string) {
    return await this.createAgreementaService.createAgreement(agreement)
  }
}
