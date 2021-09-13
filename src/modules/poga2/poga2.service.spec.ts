import { Test, TestingModule } from '@nestjs/testing';
import { Poga2Service } from './poga2.service';

describe('Poga2Service', () => {
  let service: Poga2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Poga2Service],
    }).compile();

    service = module.get<Poga2Service>(Poga2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
