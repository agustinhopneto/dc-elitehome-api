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
	execute({
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
	}: CreatePropertyUseCaseRequest): CreatePropertyUseCaseResponse {
		const property = new Property({
			name,
			totalValue,
			numberOfRooms,
			city,
			state,
			size,
		});

		properties.push(property);

		return { property };
	}
}
