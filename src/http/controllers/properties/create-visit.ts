import { VisitsRepository } from '@/database/repositories/visits';
import { VisitStatus } from '@/enums/visit-status';
import { CreateVisitUseCase } from '@/use-cases/create-visit';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function createVisit(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const schema = z.object({
		name: z.string().min(1).max(255),
		email: z.string().email(),
		phone: z.string().length(14),
		date: z.coerce.date(),
		status: z.nativeEnum(VisitStatus),
	});

	const paramsSchema = z.object({
		id: z.string().uuid(),
	});

	const data = schema.parse(request.body);
	const params = paramsSchema.parse(request.params);

	const repository = new VisitsRepository();
	const useCase = new CreateVisitUseCase(repository);

	const response = await useCase.execute({
		...data,
		propertyId: params.id,
	});

	return reply.status(201).send(response);
}
