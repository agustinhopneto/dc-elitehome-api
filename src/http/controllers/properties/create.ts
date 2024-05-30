import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property';
import type { FastifyReply, FastifyRequest } from 'fastify';

export function create(request: FastifyRequest, reply: FastifyReply) {
	const useCase = new CreatePropertyUseCase();

	const response = useCase.execute(
		request.body as CreatePropertyUseCaseRequest,
	);

	return reply.status(201).send(response);
}
