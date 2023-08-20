import { Episode } from '../../domain/models/Episode';
import { EpisodesServiceResponse } from '../types/EpisodesServiceResponse';

export const mapperEpisodesResponse = (
	podcastServiceResponse: EpisodesServiceResponse
): Episode[] => {
	return podcastServiceResponse.results
		.filter(result => result.wrapperType === 'podcastEpisode')
		.map(episode => ({
			id: episode.trackId,
			name: episode.trackName,
			description: episode.description,
			url: episode.previewUrl,
			releaseDate: new Date(episode.releaseDate),
			duration: episode.trackTimeMillis,
		}));
};
