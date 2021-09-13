import { Test, TestingModule } from '@nestjs/testing';
import { SettledController } from './settled.controller';

describe('SettledController', () => {
  let controller: SettledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettledController],
    }).compile();

    controller = module.get<SettledController>(SettledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
