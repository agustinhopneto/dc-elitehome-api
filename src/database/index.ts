import { envs } from '@/config/envs';
import knexConfig from 'knex';

export const knex = knexConfig({
	client: 'pg',
	connection: envs.POSTGRES_CONN_STRING,
	pool: {
		min: 2,
		max: 10,
	},
});
