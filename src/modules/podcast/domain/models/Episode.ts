export interface Episode {
	id: number;
	name: string;
	description: string | undefined;
	releaseDate: string;
	duration?: number | undefined;
	url: string | undefined;
}
