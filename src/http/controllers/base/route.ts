import type { FastifyInstance } from 'fastify';

import { info } from './info';

export async function baseRoutes(app: FastifyInstance) {
	app.get('/', info);
}
