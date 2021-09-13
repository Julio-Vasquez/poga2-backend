import { Test, TestingModule } from '@nestjs/testing';
import { Poga2Controller } from './poga2.controller';

describe('Poga2Controller', () => {
  let controller: Poga2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Poga2Controller],
    }).compile();

    controller = module.get<Poga2Controller>(Poga2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
