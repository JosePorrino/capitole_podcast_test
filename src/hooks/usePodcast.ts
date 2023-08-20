import { PodcastService } from '@/modules/podcast/domain/services/PodcastService';
import { ApiPodcast } from '@/modules/podcast/infrastructure/ApiPodcast';

const NUMBER_OF_PODCASTS = 100;

export const usePodcasts = () => {
	const getPodcasts = async () => {
		const podcastApi = new PodcastService(new ApiPodcast());

		try {
			const response = await podcastApi.getPodcasts(NUMBER_OF_PODCASTS);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	const getEpisodes = async (podcastId: string) => {
		const podcastApi = new PodcastService(new ApiPodcast());

		try {
			const response = await podcastApi.getEpisodes(podcastId);
			return response;
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getPodcasts,
		getEpisodes,
	};
};
