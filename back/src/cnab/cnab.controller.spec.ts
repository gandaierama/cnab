import { Test, TestingModule } from '@nestjs/testing';
import { CnabController } from './cnab.controller';
import { CnabService } from './cnab.service';

describe('CnabController', () => {
  let controller: CnabController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CnabController],
      providers: [CnabService],
    }).compile();

    controller = module.get<CnabController>(CnabController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
