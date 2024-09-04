import type { FastifyInstance } from 'fastify';

import type { Property } from '@/entities/property';
import { create } from './create';
import { find } from './find';
import { search } from './search';

export const properties: Property[] = [];

export async function propertiesRoutes(app: FastifyInstance) {
	app.get('/manager/properties', search);
	app.get('/manager/properties/:id', find);
	app.post('/manager/properties', create);
}
