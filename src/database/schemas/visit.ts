import { Visit } from '@/entities/visit';
import type { VisitStatus } from '@/enums/visit-status';

type VisitSchemaProps = {
	id?: string;
	name: string;
	phone: string;
	email: string;
	status: VisitStatus;
	date: string;
	created_at?: string;
	updated_at?: string;
	property_id: string;
};

export class VisitSchema {
	public id?: string;
	public name: string;
	public phone: string;
	public email: string;
	public status: VisitStatus;
	public date: string;
	public created_at?: string;
	public updated_at?: string;
	public property_id: string;

	constructor(props: VisitSchemaProps) {
		this.id = props.id;
		this.name = props.name;
		this.phone = props.phone;
		this.email = props.email;
		this.status = props.status;
		this.date = props.date;
		this.created_at = props.created_at;
		this.updated_at = props.updated_at;
		this.property_id = props.property_id;
	}

	public toEntity() {
		return new Visit({
			id: this.id,
			name: this.name,
			phone: this.phone,
			email: this.email,
			date: new Date(this.date),
			status: this.status,
			createdAt: this.created_at ? new Date(this.created_at) : undefined,
			updatedAt: this.updated_at ? new Date(this.updated_at) : undefined,
			propertyId: this.property_id,
		});
	}
}
