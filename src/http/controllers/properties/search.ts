import { SearchPropertiesUseCase } from '@/use-cases/search-properties';
import type { FastifyReply, FastifyRequest } from 'fastify';

export function search(_: FastifyRequest, reply: FastifyReply) {
	const useCase = new SearchPropertiesUseCase();

	const response = useCase.execute();

	return reply.status(200).send(response);
}
