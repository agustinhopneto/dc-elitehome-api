import path from 'node:path';
import type { Knex } from 'knex';

const config: Knex.Config = {
	client: 'postgresql',
	connection: 'postgres://docker:docker@localhost:5432/elitehome',
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
