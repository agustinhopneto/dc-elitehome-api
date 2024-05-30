import fastify from 'fastify';

import { baseRoutes } from './controllers/base/route';

export const app = fastify();

app.register(baseRoutes);
