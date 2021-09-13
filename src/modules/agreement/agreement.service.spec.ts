import { Test, TestingModule } from '@nestjs/testing';
import { AgreementService } from './agreement.service';

describe('AgreementService', () => {
  let service: AgreementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgreementService],
    }).compile();

    service = module.get<AgreementService>(AgreementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
