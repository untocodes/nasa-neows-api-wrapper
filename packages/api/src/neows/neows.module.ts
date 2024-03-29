import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClosestAsteroidDtoMapper } from '../mappers/closest-asteroid-dto.mapper';
import { NeoWsQueryCommand } from './commands/neows-query.command';
import { NeoWsClient } from './neows.client';
import { NeoWsService } from './neows.service';

@Module({
  imports: [HttpModule],
  providers: [
    NeoWsClient,
    NeoWsService,
    NeoWsQueryCommand,
    ClosestAsteroidDtoMapper,
    ConfigService,
  ],
  exports: [NeoWsService, NeoWsQueryCommand],
})
export class NeoWsModule {}
