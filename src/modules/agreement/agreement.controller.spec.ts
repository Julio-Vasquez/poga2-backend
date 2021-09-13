import { Test, TestingModule } from '@nestjs/testing';
import { AgreementController } from './agreement.controller';

describe('AgreementController', () => {
  let controller: AgreementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgreementController],
    }).compile();

    controller = module.get<AgreementController>(AgreementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
