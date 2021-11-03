import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnabModule } from './cnab/cnab.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [CnabModule,
  	ConfigModule.forRoot({
  	  isGlobal: true,
	}), 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'bycoders',
      password: 'bycoders',
      database: 'cnab',
      entities: ["*.entity{.ts,.js}"],
  	  synchronize: true,
  	  autoLoadEntities: true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

 // - APP_PORT=8080
 //      - MYSQL_ROOT_PASSWORD=root
 //      - MYSQL_USER=bycoders
 //      - MYSQL_PASSWORD=bycoders
 //      - MYSQL_DATABASE=cnab