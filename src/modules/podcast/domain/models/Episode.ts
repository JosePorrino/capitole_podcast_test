export interface Episode {
	id: number;
	name: string;
	description: string | undefined;
	releaseDate: Date;
	duration: number | undefined;
	url: string | undefined;
}
