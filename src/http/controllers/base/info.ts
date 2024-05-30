import { AppInfoUseCase } from '@/use-cases/app-info';
import type { FastifyReply, FastifyRequest } from 'fastify';

export function info(_: FastifyRequest, reply: FastifyReply) {
	const useCase = new AppInfoUseCase();

	const response = useCase.execute();

	return reply.status(200).send(response);
}
