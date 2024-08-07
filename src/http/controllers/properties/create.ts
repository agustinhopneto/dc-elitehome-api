import type { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { PropertiesRepository } from '@/database/repositories/properties';
import { CreatePropertyUseCase } from '@/use-cases/create-property';

export async function create(request: FastifyRequest, reply: FastifyReply) {
	const schema = z.object({
		name: z.string().min(1).max(255),
		size: z.number(),
		totalValue: z.number().int(),
		condoValue: z.number().int(),
		rentValue: z.number().int(),
		taxValue: z.number().int(),
		numberOfRooms: z.number().int(),
		numberOfBathrooms: z.number().int(),
		garageSlots: z.number().int(),
		arePetsAllowed: z.boolean(),
		isNextToSubway: z.boolean(),
		isActive: z.boolean(),
		description: z.string().max(1000),
		isRent: z.boolean(),
		isSale: z.boolean(),
		address: z.string(),
		latitude: z.number(),
		longitude: z.number(),
	});

	const data = schema.parse(request.body);

	const repository = new PropertiesRepository();
	const useCase = new CreatePropertyUseCase(repository);

	const response = await useCase.execute(data);

	return reply.status(201).send(response);
}
