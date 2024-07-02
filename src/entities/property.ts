type PropertyProps = {
	id?: string;
	name: string;
	totalValue: number;
	numberOfRooms: number;
	city: string;
	state: string;
	size: string;
	createdAt?: Date;
	updatedAt?: Date;
};

// TODO definir todos os atributos da entidade Property
export class Property {
	public id?: string;
	public name: string;
	public totalValue: number;
	public numberOfRooms: number;
	public city: string;
	public state: string;
	public size: string;
	public createdAt?: Date;
	public updatedAt?: Date;

	constructor({
		id,
		name,
		totalValue,
		numberOfRooms,
		city,
		state,
		size,
		createdAt,
		updatedAt,
	}: PropertyProps) {
		this.id = id;
		this.name = name;
		this.totalValue = totalValue;
		this.numberOfRooms = numberOfRooms;
		this.city = city;
		this.state = state;
		this.size = size;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
