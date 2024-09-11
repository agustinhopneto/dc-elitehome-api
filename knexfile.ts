import path from 'node:path';
import { envs } from '@/config/envs';
import type { Knex } from 'knex';

const config: Knex.Config = {
	client: 'postgresql',
	connection: envs.POSTGRES_CONN_STRING,
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: path.join(__dirname, 'src', 'database', 'migrations'),
	},
};

export default config;
