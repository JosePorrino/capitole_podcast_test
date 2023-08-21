import { useDispatch, useSelector } from 'react-redux';
import { PodcastService } from '@/modules/podcast/domain/services/PodcastService';
import { ApiPodcast } from '@/modules/podcast/infrastructure/ApiPodcast';
import { useEffect } from 'react';
import { setEpisodesList } from '@/redux/actions/episodesAction';
import { RootState } from '@/redux/reducers';
import { useBrowserStore } from './useBrowserStore';
import { Episode } from '@/modules/podcast/domain/models/Episode';

const useEpisodes = (podcastId: string) => {
	const dispatch = useDispatch();
	const podcastList = useSelector(
		(state: RootState) => state.podcastReducer.podcastList
	);
	const { setItem, getItem } = useBrowserStore();

	const shouldFetchEpisodes = podcastList.length === 0;

	useEffect(() => {
		const loadEpisodes = async () => {
			const storedEpisodes = getItem('episodesList') as Episode[];

			if (storedEpisodes) {
				dispatch(setEpisodesList(storedEpisodes));
			} else {
				const podcastApi = new PodcastService(new ApiPodcast());
				try {
					const episodes = await podcastApi.getEpisodes(podcastId);
					dispatch(setEpisodesList(episodes));

					if (shouldFetchEpisodes) {
						setItem('episodesList', episodes);
					}
				} catch (error) {
					console.error('Error fetching podcasts', error);
				}
			}
		};

		if (shouldFetchEpisodes) {
			loadEpisodes();
		}
	}, [dispatch, shouldFetchEpisodes]);

	return podcastList;
};

export default useEpisodes;
