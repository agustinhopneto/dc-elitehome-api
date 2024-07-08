import { knex } from '@/database';
import type { Property } from '@/entities/property';
import { PropertySchema } from '../schemas/property';

export class PropertiesRepository {
	async create(property: Property): Promise<Property> {
		const [createdProperty] = await knex<PropertySchema>('properties')
			.insert({
				name: property.name,
				size: property.size,
				city: property.city,
				state: property.state,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
			})
			.returning('*');

		const propertyEntity = new PropertySchema(createdProperty).toEntity();

		return propertyEntity;
	}
}
