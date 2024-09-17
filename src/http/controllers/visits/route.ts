import type { FastifyInstance } from 'fastify';

import { create } from './create';

export async function visitsRoutes(app: FastifyInstance) {
	app.post('/manager/visits', create);
}
