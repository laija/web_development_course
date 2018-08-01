export class Producto{
	constructor(
		public id: number,
		public first_name: string,
		public last_name: string,
		public avatar: string,
	){}
}

export class Usuario{
	constructor(
		public name: string,
		public job: string,
	){}
}

export class Usuarios{
	constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public avatar: string 
	){}
}