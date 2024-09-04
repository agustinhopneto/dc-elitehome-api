import { PropertiesRepository } from '@/database/repositories/properties';
import { FindPropertyUseCase } from '@/use-cases/find-property';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function find(request: FastifyRequest, reply: FastifyReply) {
	const schema = z.object({
		id: z.string().uuid(),
	});

	const params = schema.parse(request.params);

	const repository = new PropertiesRepository();
	const useCase = new FindPropertyUseCase(repository);

	const response = await useCase.execute(params.id);

	return reply.status(200).send(response);
}
