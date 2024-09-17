import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('visits', (table) => {
		table.uuid('id').primary().defaultTo(knex.fn.uuid());
		table.string('name', 255).notNullable();
		table.string('phone', 255).notNullable();
		table.string('email', 255).notNullable();
		table.dateTime('date').notNullable();
		table.string('status').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('visits');
}
