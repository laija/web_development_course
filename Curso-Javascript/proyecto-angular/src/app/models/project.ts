/*El modelo va representar a un objeto o un documento de mi base de datos, va a ser una entidad */
export class Project{

	constructor(
		public _id: string,
		public name: string, 
		public description: string,
		public year: number, 
		public langs: string, 
		public image: string
	){}
}

//crear campos