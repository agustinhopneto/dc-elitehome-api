import { PropertiesRepository } from '@/database/repositories/properties';
import {
	CreatePropertyUseCase,
	type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property';
import type { FastifyReply, FastifyRequest } from 'fastify';

export async function create(request: FastifyRequest, reply: FastifyReply) {
	// TODO validar os dados de create das properties
	const repository = new PropertiesRepository();
	const useCase = new CreatePropertyUseCase(repository);

	const response = await useCase.execute(
		request.body as CreatePropertyUseCaseRequest,
	);

	return reply.status(201).send(response);
}
