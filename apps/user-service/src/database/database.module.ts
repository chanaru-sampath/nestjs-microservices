import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as authSchema from '../auth/auth.schema';
import { DATABASE_CONNECTION } from './database-connection';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
        });
        return drizzle(pool, {
          schema: {
            ...authSchema,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
