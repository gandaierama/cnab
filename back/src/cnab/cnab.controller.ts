import { Controller,UploadedFile,
  UseInterceptors, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CnabService } from './cnab.service';
import { CreateCnabDto } from './dto/create-cnab.dto';
import { UpdateCnabDto } from './dto/update-cnab.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('cnab')
export class CnabController {
  constructor(private readonly cnabService: CnabService) {}



  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }



  @Get()
  findAll() {
    return this.cnabService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cnabService.findOne(+id);
  }



  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cnabService.remove(+id);
  }
}
