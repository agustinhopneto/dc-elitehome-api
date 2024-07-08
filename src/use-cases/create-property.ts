import type { PropertiesRepository } from '@/database/repositories/properties';
import { Property } from '@/entities/property';

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
	constructor(private repository: PropertiesRepository) {}

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

		const createdProperty = await this.repository.create(property);

		return { property: createdProperty };
	}
}
