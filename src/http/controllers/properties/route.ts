import type { FastifyInstance } from 'fastify';

import { create } from './create';

export async function propertiesRoutes(app: FastifyInstance) {
	app.post('/properties', create);
}
