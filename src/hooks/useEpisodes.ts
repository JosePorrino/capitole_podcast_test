import { setEpisodesPodcastId } from './../redux/actions/episodeAction';
import { useDispatch, useSelector } from 'react-redux';
import { PodcastService } from '@/modules/podcast/domain/services/PodcastService';
import { ApiPodcast } from '@/modules/podcast/infrastructure/ApiPodcast';
import { useEffect } from 'react';
import { setEpisodesList } from '@/redux/actions/episodeAction';
import { RootState } from '@/redux/reducers';
import { useBrowserStore } from './useBrowserStore';
import { setLoading } from '@/redux/actions/loadingAction';

const useEpisodes = (podcastId: string) => {
	const dispatch = useDispatch();

	const { episodesList, episodesPodcastId } = useSelector(
		(state: RootState) => ({
			episodesList: state.episodesReducer.episodesList,
			episodesPodcastId: state.episodesReducer.episodesPodcastId,
		})
	);
	const { setItem, removeItem } = useBrowserStore();

	useEffect(() => {
		const loadEpisodes = async () => {
			const podcastApi = new PodcastService(new ApiPodcast());
			try {
				dispatch(setLoading(true));
				const episodes = await podcastApi.getEpisodes(podcastId);
				dispatch(setEpisodesList(episodes));
				dispatch(setLoading(false));

				setItem('episodesList', episodes);
				setItem('episodesPodcastId', podcastId);
			} catch (error) {
				console.error('Error fetching podcasts', error);
			}
		};

		if (episodesPodcastId !== podcastId) {
			dispatch(setEpisodesPodcastId(podcastId));
			dispatch(setEpisodesList([]));
			removeItem('episodesList');
			loadEpisodes();
		}
	}, []);

	return episodesList;
};

export default useEpisodes;
