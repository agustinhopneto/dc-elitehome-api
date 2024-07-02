import { knex } from '@/database';
import { Property } from '@/entities/property';
import { properties } from '@/http/controllers/properties/route';

export type CreatePropertyUseCaseRequest = {
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
};

type CreatePropertyUseCaseResponse = {
	property: Property;
};

export class CreatePropertyUseCase {
	async execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePropertyUseCaseRequest): Promise<CreatePropertyUseCaseResponse> {
		const property = new Property({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

		const [createdProperty] = await knex('properties')
			.insert({
				name: property.name,
				size: property.size,
				city: property.city,
				state: property.state,
				total_value: property.totalValue,
				number_of_rooms: property.numberOfRooms,
			})
			.returning('*');

		return { property: createdProperty };
	}
}
