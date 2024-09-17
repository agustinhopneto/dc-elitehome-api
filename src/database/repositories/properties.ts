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

	async findById(id: string): Promise<Property | null> {
		const properties = await knex<PropertySchema>('properties').where({ id });

		const propertiesEntities = properties.map((property) =>
			new PropertySchema(property).toEntity(),
		);

		const property = propertiesEntities.at(0);

		if (!property) {
			return null;
		}

		return property;
	}

	async update(
		id: string,
		property: Partial<Omit<Property, 'id' | 'createdAt' | 'updatedAt'>>,
	): Promise<Property> {
		const [updatedProperty] = await knex<PropertySchema>('properties')
			.update({
				...(property.name && { name: property.name }),
				...(property.size && { size: property.size }),
				...(property.totalValue && { total_value: property.totalValue }),
				...(property.numberOfRooms && {
					number_of_rooms: property.numberOfRooms,
				}),
				...(property.address && { address: property.address }),
				...(property.arePetsAllowed && {
					are_pets_allowed: property.arePetsAllowed,
				}),
				...(property.condoValue && { condo_value: property.condoValue }),
				...(property.description && { description: property.description }),
				...(property.garageSlots && { garage_slots: property.garageSlots }),
				...(property.isActive && { is_active: property.isActive }),
				...(property.isNextToSubway && {
					is_next_to_subway: property.isNextToSubway,
				}),
				...(property.isRent && { is_rent: property.isRent }),
				...(property.isSale && { is_sale: property.isSale }),
				...(property.latitude && { latitude: property.latitude }),
				...(property.longitude && { longitude: property.longitude }),
				...(property.numberOfBathrooms && {
					number_of_bathrooms: property.numberOfBathrooms,
				}),
				...(property.rentValue && { rent_value: property.rentValue }),
				...(property.taxValue && { tax_value: property.taxValue }),
				...(property.isFurnished && { is_furnished: property.isFurnished }),
			})
			.where({ id })
			.returning('*');

		const propertyEntity = new PropertySchema(updatedProperty).toEntity();

		return propertyEntity;
	}
}
