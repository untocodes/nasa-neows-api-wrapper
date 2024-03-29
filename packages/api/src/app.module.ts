import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { ClosestAsteroidDtoMapper } from './mappers/closest-asteroid-dto.mapper';
import { NeoWsModule } from './neows/neows.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../.env', // use shared env

      // Validate contents of the provided configuration
      validationSchema: Joi.object({
        NASA_API_KEY: Joi.string().required(),
      }),
      validationOptions: {
        abortEarly: true,
      },
      isGlobal: true,
    }),
    NeoWsModule,
  ],
  providers: [ClosestAsteroidDtoMapper],
  controllers: [AppController],
})
export class AppModule {}
