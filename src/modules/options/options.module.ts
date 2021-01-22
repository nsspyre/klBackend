import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OptionsController } from './options.controller';
import { OptionsService } from './options.service';
import { OptionsSchema } from './schemas/Options.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Options', schema: OptionsSchema }]),
    ],
    controllers: [OptionsController],
    providers: [OptionsService],
})
export class OptionsModule {}
