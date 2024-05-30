import type { FastifyInstance } from 'fastify';

export async function baseRoutes(app: FastifyInstance) {
	app.get('/', (request, reply) => {
		return reply.status(200).send({ message: 'App is runnning!' });
	});
}
