import { Module } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { CnabController } from './cnab.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CNAB } from './entities/cnab.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CNAB])],
  controllers: [CnabController],
  providers: [CnabService]
})
export class CnabModule {}
