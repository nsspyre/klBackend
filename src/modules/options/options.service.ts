import { Injectable, NotFoundException } from '@nestjs/common';

import {
  Options,
} from './interfaces/Options.interface';
import { Options as OptionsDto } from './dto/create-option.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OptionsService {
  constructor(
    @InjectModel('Options') private readonly model: Model<Options>,
  ) {}

  public async addOption(option: OptionsDto): Promise<string> {
    try {
      const newOption = new this.model(option);
      const result = await newOption.save();

      return result._id as string;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
