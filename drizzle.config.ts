import "dotenv/config";
import type { Config } from "drizzle-kit";

const config = {
  out: "./migrations",
  schema: "./db/schema.ts",
  connectionString: process.env.DB_URL,
} satisfies Config;

export default config;
