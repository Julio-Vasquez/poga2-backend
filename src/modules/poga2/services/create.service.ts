import { HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, In } from 'typeorm'

import {
  ModalityEntity,
  PersonEntity,
  Poga2Entity,
  SettledEntity,
  StateEntity,
} from 'src/entities'
import { Poga2Dto } from '../dto/poga2.dto'
import {
  SUCCESS,
  FAILED,
  NO_EXISTS,
} from 'src/modules/@common/constant/messages.constant'
import { IResponse } from 'src/modules/@common/interface/response.interface'

@Injectable()
export class CreatePoga2Service {
  constructor(
    @InjectRepository(ModalityEntity)
    private readonly modalityRepository: Repository<ModalityEntity>,
    @InjectRepository(PersonEntity)
    private readonly personRepository: Repository<PersonEntity>,
    @InjectRepository(Poga2Entity)
    private readonly poga2Repository: Repository<Poga2Entity>,
    @InjectRepository(SettledEntity)
    private readonly settledRepository: Repository<SettledEntity>,
    @InjectRepository(StateEntity)
    private readonly stateRepository: Repository<StateEntity>
  ) {}

  public async createPoga2(poga2: Poga2Dto): Promise<IResponse> {
    const {
      director,
      studentOne,
      studentTwo,
      juryOne,
      juryTwo,
      juryThree,
      state,
      settled,
      modality,
      ...pogaTwo
    } = poga2

    const stateEntity = await this.stateRepository.findOne({
      state: state,
    })

    if (!stateEntity)
      return {
        message: NO_EXISTS('Estado'),
        responseStatus: HttpStatus.NOT_FOUND,
      }

    const settledEntity = await this.settledRepository.findOne({
      record: settled,
    })

    if (!settledEntity)
      return {
        message: NO_EXISTS('Radicado'),
        responseStatus: HttpStatus.NOT_FOUND,
      }

    const modalityEntity = await this.modalityRepository.findOne({
      modality: modality,
    })

    if (!modalityEntity)
      return {
        message: NO_EXISTS('Modalidad'),
        responseStatus: HttpStatus.NOT_FOUND,
      }

    const peoples = await this.personRepository.find({
      identification: In([
        director,
        studentOne,
        studentTwo,
        juryOne,
        juryTwo,
        juryThree,
      ]),
    })
    console.log(peoples)
    if (peoples.length === 6) {
      const poga2Entity = await this.poga2Repository.findOne({
        title: pogaTwo.title,
      })

      if (!poga2Entity) {
        const arrPeople = {
          [director]: {},
          [studentOne]: {},
          [studentTwo]: {},
          [juryOne]: {},
          [juryTwo]: {},
          [juryThree]: {},
        }

        peoples.forEach(person => (arrPeople[person.identification] = person))

        await this.poga2Repository.save({
          ...pogaTwo,
          director: arrPeople[director],
          studentOne: arrPeople[studentOne],
          studentTwo: arrPeople[studentTwo],
          juryOne: arrPeople[juryOne],
          juryTwo: arrPeople[juryTwo],
          juryThree: arrPeople[juryThree],
          state: stateEntity,
          modality: modalityEntity,
          settled: settledEntity,
        })
        return {
          message: SUCCESS('OPCION DE GRADO'),
          responseStatus: HttpStatus.OK,
        }
      } else
        return {
          message: FAILED('OPCiON DE GRADO'),
          responseStatus: HttpStatus.NOT_FOUND,
        }
    } else
      return {
        message: NO_EXISTS('OPCION DE GRADO'),
        responseStatus: HttpStatus.NOT_FOUND,
      }
  }
}
