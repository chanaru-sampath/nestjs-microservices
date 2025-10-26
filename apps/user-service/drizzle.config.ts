import { config } from 'dotenv';
import { resolve } from 'path';

// Load app-specific .env file
config({ path: resolve(__dirname, '.env.local') });

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/**/*.schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
