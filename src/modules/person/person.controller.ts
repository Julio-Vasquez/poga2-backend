import { Body, Controller, Get, Post } from '@nestjs/common'
import { PersonDto } from './dto/person.dto'
import { CreatePersonService, FindPersonService } from './services'

@Controller('person')
export class PersonController {
  constructor(
    private readonly findPersonService: FindPersonService,
    private readonly createPersonservice: CreatePersonService
  ) {}

  @Get('/')
  public async findAllPerson() {
    return await this.findPersonService.findAllPerson()
  }

  @Post('create')
  public async createPerson(@Body() person: PersonDto) {
    return await this.createPersonservice.createPerson(person)
  }
}
