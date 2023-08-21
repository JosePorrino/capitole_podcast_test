import { AxiosInstance, AxiosResponse } from 'axios';
import { PATHS, PROXY_URL } from './constants/endpoints';
import { GENRE, MAX_LIMIT, MIN_LIMIT } from './constants/api.constants';
import { PodcastRepository } from '../domain/models/PodcastRepository';
import { Podcast } from '../domain/models/Podcast';
import { Episode } from '../domain/models/Episode';
import { mapperPodcastResponse } from './mappers/mapperPodcastResponse';
import { mapperEpisodesResponse } from './mappers/mapperEpisodesResponse';
import { PodcastServiceResponse } from './types/PodcastServiceResponse';
import { EpisodesServiceResponse } from './types/EpisodesServiceResponse';

export class ApiPodcast implements PodcastRepository {
	async getPodcastsList(
		axiosInstance: AxiosInstance,
		limit: number
	): Promise<Podcast[]> {
		if (limit <= MIN_LIMIT || limit > MAX_LIMIT) {
			throw new Error('Limit must be between 1 and 200');
		}
		try {
			const url = PATHS.TOP_PODCAST_URL.replace(
				'{limit}',
				limit.toString()
			).replace('{genre}', GENRE);
			const response: AxiosResponse<Podcast[]> =
				await axiosInstance.get<Podcast[]>(url);
			const { data } = response;
			return mapperPodcastResponse(data as unknown as PodcastServiceResponse);
		} catch (error) {
			console.error(error);
			throw new Error('Error fetching podcasts');
		}
	}

	async getEpisodesList(
		axiosInstance: AxiosInstance,
		id: string
	): Promise<Episode[]> {
		try {
			const url = PATHS.ESPISODES_URL.replace('{id}', id);
			const response: AxiosResponse<Episode[]> = await axiosInstance.get<
				Episode[]
			>(url, { proxy: { host: PROXY_URL, port: 80 } });
			const { data } = response;
			return mapperEpisodesResponse(data as unknown as EpisodesServiceResponse);
		} catch (error) {
			console.error(error);
			throw new Error('Error fetching episodes');
		}
	}
}
