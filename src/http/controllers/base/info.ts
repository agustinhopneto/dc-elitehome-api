import type { FastifyReply, FastifyRequest } from 'fastify';

import packageJson from '../../../../package.json';

export function info(_: FastifyRequest, reply: FastifyReply) {
	const { name, version } = packageJson;

	return reply.status(200).send({ name, version });
}
