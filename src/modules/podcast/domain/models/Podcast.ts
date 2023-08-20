import { Episode } from './Episode';

export interface Podcast {
	id: string;
	name: string;
	author: string;
	description: string;
	image: string;
	episodes: Episode[];
}
