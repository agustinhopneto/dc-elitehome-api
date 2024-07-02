import knexConfig from 'knex';

export const knex = knexConfig({
	client: 'pg',
	connection: 'postgres://docker:docker@localhost:5432/elitehome',
	pool: {
		min: 2,
		max: 10,
	},
});
