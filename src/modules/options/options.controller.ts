import { Controller, Post, Body } from '@nestjs/common';
import { Options as OptionsDto } from './dto/create-option.dto';
import { OptionsService } from './options.service';

@Controller('options')
export class OptionsController {
  constructor(private readonly service: OptionsService) {}

  @Post('option')
  async addOption(@Body() option: OptionsDto) {
    const id = await this.service.addOption(option);

    return { _id: id };
  }
}
