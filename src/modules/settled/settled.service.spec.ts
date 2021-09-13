import { Test, TestingModule } from '@nestjs/testing';
import { SettledService } from './settled.service';

describe('SettledService', () => {
  let service: SettledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SettledService],
    }).compile();

    service = module.get<SettledService>(SettledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
