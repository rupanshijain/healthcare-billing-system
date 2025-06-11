// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Feature Modules
import { PatientModule } from './patients/patients.module';
import { UsersModule } from './users/users.module';
import { ClinicsModule } from './clinics/clinics.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { BillingSessionsModule } from './billing-sessions/billing-session.module';
import { InvoicesModule } from './invoices/invoices.module';
import { OhipCodesModule } from './ohip-code/ohip-code.module';
import { AuditLogsModule } from './audit-logs/audit-logs.module';
import { ConfigModule } from './config/config.module';

// DB Modules
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

// Config
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // PostgreSQL - TypeORM
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),

    // MongoDB - Mongoose
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),

    // Feature Modules
    PatientModule,
    UsersModule,
    ClinicsModule,
    AuthModule,
    ServicesModule,
    BillingSessionsModule,
    InvoicesModule,
    OhipCodesModule,
    AuditLogsModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
