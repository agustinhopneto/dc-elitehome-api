import path from 'node:path';
import type { Knex } from 'knex';
import { envs } from './src/config/envs';

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
