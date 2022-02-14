
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Param
} from '@nestjs/common';

import { CnabService } from './cnab.service';
import { CreateCnabDto } from './dto/create-cnab.dto';
import { UpdateCnabDto } from './dto/update-cnab.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('cnab')
export class CnabController {
  constructor(private readonly cnabService: CnabService) {}



  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile(
    @Body() body: CreateCnabDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      body,
      file: file.buffer.toString()
    };
  }



  @Get()
  findAll() {
    return this.cnabService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cnabService.findOne(+id);
  }

}
