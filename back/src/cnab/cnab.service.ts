import { Injectable } from '@nestjs/common';
import { CreateCnabDto } from './dto/create-cnab.dto';
import { UpdateCnabDto } from './dto/update-cnab.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CNAB } from './entities/cnab.entity';


@Injectable()
export class CnabService {
  constructor(
    @InjectRepository(CNAB)
    private cnabRepository: Repository<CNAB>,
  ) {}

  findAll(): Promise<CNAB[]> {
    return this.cnabRepository.find();
  }

  findOne(id): Promise<CNAB> {
    return this.cnabRepository.findOne(id);
  }

  async remove(id): Promise<void> {
    await this.cnabRepository.delete(id);
  }
}