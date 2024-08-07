import { knex } from '@/database';
import type { Property } from '@/entities/property';
import { PropertySchema } from '../schemas/property';

export class PropertiesRepository {
	async create(property: Property): Promise<Property> {
		const [createdProperty] = await knex<PropertySchema>('properties')
			.insert({
				name: property.name,
				size: property.size,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
				address: property.address,
				are_pets_allowed: property.arePetsAllowed,
				condo_value: property.condoValue,
				description: property.description,
				garage_slots: property.garageSlots,
				is_active: property.isActive,
				is_next_to_subway: property.isNextToSubway,
				is_rent: property.isRent,
				is_sale: property.isSale,
				latitude: property.latitude,
				longitude: property.longitude,
				number_of_bathrooms: property.numberOfBathrooms,
				rent_value: property.rentValue,
				tax_value: property.taxValue,
				is_furnished: property.isFurnished,
			})
			.returning('*');

		const propertyEntity = new PropertySchema(createdProperty).toEntity();

		return propertyEntity;
	}

	async find(): Promise<Property[]> {
		const properties = await knex<PropertySchema>('properties');

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

		return propertiesEntities;
	}
}
