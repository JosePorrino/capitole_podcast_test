import { AxiosInstance } from 'axios';
import { Episode } from './Episode';
import { Podcast } from './Podcast';

export interface PodcastRepository {
	getPodcastsList(
		podcastInstance: AxiosInstance,
		limit: number
	): Promise<Podcast[]>;
	getEpisodesList(
		podcastInstance: AxiosInstance,
		id: string
	): Promise<Episode[]>;
}
