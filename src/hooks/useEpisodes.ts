import { setEpisodesPodcastId } from './../redux/actions/episodeAction';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastService } from '@/modules/podcast/domain/services/PodcastService';
import { ApiPodcast } from '@/modules/podcast/infrastructure/ApiPodcast';
import { useEffect, useState } from 'react';
import { setEpisodesList } from '@/redux/actions/episodeAction';
import { RootState } from '@/redux/reducers';
import { useBrowserStore } from './useBrowserStore';
import { Episode } from '@/modules/podcast/domain/models/Episode';
import { setLoading } from '@/redux/actions/loadingAction';

const useEpisodes = (podcastId: string) => {
	const dispatch = useDispatch();
	const [shouldFetchEpisodes, setShouldFetchEpisodes] = useState(false);

	const { episodesList, episodesPodcastId } = useSelector(
		(state: RootState) => ({
			episodesList: state.episodesReducer.episodesList,
			episodesPodcastId: state.episodesReducer.episodesPodcastId,
		})
	);
	const { setItem, getItem, removeItem } = useBrowserStore();

	useEffect(() => {
		if (episodesPodcastId !== podcastId) {
			dispatch(setEpisodesPodcastId(podcastId));
			dispatch(setEpisodesList([]));
			removeItem('episodesList');
		}
		setShouldFetchEpisodes(true);
	}, []);

	useEffect(() => {
		const loadEpisodes = async () => {
			const storedEpisodes = getItem('episodesList') as Episode[];

			if (storedEpisodes) {
				dispatch(setEpisodesList(storedEpisodes));
			} else {
				const podcastApi = new PodcastService(new ApiPodcast());
				try {
					dispatch(setLoading(true));
					const episodes = await podcastApi.getEpisodes(podcastId);
					dispatch(setEpisodesList(episodes));
					dispatch(setLoading(false));

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
	}, [shouldFetchEpisodes]);

	return episodesList;
};

export default useEpisodes;
