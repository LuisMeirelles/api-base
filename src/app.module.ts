import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {dirname} from 'node:path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: configService.get<string>('MYSQL_ROOT_PASSWORD'),
        database: 'api_base',
        entities: [dirname('.') + '/**/entities/*.entity{.ts,.js}']
      }),
      inject: [ConfigService]
    }),
  ],
})
export class AppModule {
}
