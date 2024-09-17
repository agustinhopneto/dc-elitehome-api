import type { VisitsRepository } from '@/database/repositories/visits';
import { Visit } from '@/entities/visit';
import type { VisitStatus } from '@/enums/visit-status';

export type CreateVisitUseCaseRequest = {
	name: string;
	phone: string;
	email: string;
	date: Date;
	status: VisitStatus;
	propertyId: string;
};

type CreateVisitUseCaseResponse = {
	visit: Visit;
};

export class CreateVisitUseCase {
	constructor(private repository: VisitsRepository) {}

	async execute(
		data: CreateVisitUseCaseRequest,
	): Promise<CreateVisitUseCaseResponse> {
		const visit = new Visit(data);

		const createdVisit = await this.repository.create(visit);

		return { visit: createdVisit };
	}
}
