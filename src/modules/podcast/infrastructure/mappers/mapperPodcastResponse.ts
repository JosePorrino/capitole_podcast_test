import { Podcast } from '../../domain/models/Podcast';
import { PodcastServiceResponse } from '../types/PodcastServiceResponse';

export const mapperPodcastResponse = (
	podcastServiceResponse: PodcastServiceResponse
): Podcast[] => {
	return podcastServiceResponse.feed.entry.map(entry => ({
		id: entry.id.attributes['im:id'],
		name: entry['im:name'].label,
		author: entry['im:artist'].label,
		description: entry.summary.label,
		image: entry['im:image'][2].label,
		episodes: [],
	}));
};
