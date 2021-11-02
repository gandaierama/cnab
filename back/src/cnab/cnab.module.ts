import { Module } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { CnabController } from './cnab.controller';

@Module({
  controllers: [CnabController],
  providers: [CnabService]
})
export class CnabModule {}
