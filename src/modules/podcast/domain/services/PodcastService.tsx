import axiosInit from '../../infrastructure/httpAxios/init';
import { Episode } from '../models/Episode';
import { Podcast } from '../models/Podcast';
import { PodcastRepository } from '../models/PodcastRepository';

export class PodcastService {
	constructor(private readonly repository: PodcastRepository) {}

	getPodcasts(limit: number): Promise<Podcast[]> {
		const customAxios = axiosInit();
		return this.repository.getPodcastsList(customAxios, limit);
	}

	getEpisodes(id: string): Promise<Episode[]> {
		const customAxios = axiosInit();
		return this.repository.getEpisodesList(customAxios, id);
	}
}
