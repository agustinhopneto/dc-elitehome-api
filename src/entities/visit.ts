import type { VisitStatus } from '@/enums/visit-status';

type VisitProps = {
	id?: string;
	name: string;
	phone: string;
	email: string;
	date: Date;
	status: VisitStatus;
	createdAt?: Date;
	updatedAt?: Date;
	propertyId: string;
};

export class Visit {
	public id?: string;
	public name: string;
	public phone: string;
	public email: string;
	public date: Date;
	public status: VisitStatus;
	public createdAt?: Date;
	public updatedAt?: Date;
	public propertyId: string;

	constructor(props: VisitProps) {
		this.id = props.id;
		this.name = props.name;
		this.phone = props.phone;
		this.email = props.email;
		this.date = props.date;
		this.status = props.status;
		this.createdAt = props.createdAt;
		this.updatedAt = props.updatedAt;
		this.propertyId = props.propertyId;
	}
}
