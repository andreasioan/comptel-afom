export interface SearchFilter {
	orderBy?: {
		column: string,
		orderBy: string
	};
	creationDate?: {
		from?: string,
		to?: string,
		type?: string,
		day?: string
	};
	dueDate?: {
		from?: string,
		to?: string,
		type?: string,
		day?: string
	};
	search?: {
		query: string,
		column: string
	};
}
