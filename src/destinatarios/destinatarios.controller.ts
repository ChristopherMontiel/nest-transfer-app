import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DestinatariosService } from './destinatarios.service';
import { CreateDestinatarioDto } from './dto/create-destinatario.dto';
import { UpdateDestinatarioDto } from './dto/update-destinatario.dto';

@Controller('destinatarios')
export class DestinatariosController {
  constructor(private readonly destinatariosService: DestinatariosService) {}

  @Post()
  create(@Body() createDestinatarioDto: CreateDestinatarioDto) {
    return this.destinatariosService.create(createDestinatarioDto);
  }

  @Get()
  findAll() {
    return this.destinatariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinatariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDestinatarioDto: UpdateDestinatarioDto) {
    return this.destinatariosService.update(+id, updateDestinatarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinatariosService.remove(+id);
  }
}
