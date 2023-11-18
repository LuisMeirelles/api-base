import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
        autoLoadEntities: true
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {
}
