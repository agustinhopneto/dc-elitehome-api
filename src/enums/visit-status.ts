export enum VisitStatus {
	INTEREST = 'INTEREST',
	CONFIRMED = 'CONFIRMED',
	REALIZED = 'REALIZED',
	CANCELED = 'CANCELED',
}

export const visitStatusDescriptions = {
	[VisitStatus.INTEREST]: 'Interesse',
	[VisitStatus.CONFIRMED]: 'Confirmado',
	[VisitStatus.REALIZED]: 'Realizado',
	[VisitStatus.CANCELED]: 'Cancelado',
};
