import { useDispatch, useSelector } from 'react-redux';
import { PodcastService } from '@/modules/podcast/domain/services/PodcastService';
import { ApiPodcast } from '@/modules/podcast/infrastructure/ApiPodcast';
import { useEffect } from 'react';
import { setPodcastList } from '@/redux/actions/podcastAction';
import { RootState } from '@/redux/reducers';
import { useBrowserStore } from './useBrowserStore';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { setLoading } from '@/redux/actions/loadingAction';

const NUMBER_OF_PODCASTS = 100;

const usePodcast = () => {
	const dispatch = useDispatch();
	const podcastList = useSelector(
		(state: RootState) => state.podcastReducer.podcastList
	);
	const { setItem, getItem } = useBrowserStore();

	const shouldFetchPodcasts = podcastList.length === 0;

	useEffect(() => {
		const loadPodcasts = async () => {
			const storedPodcasts = getItem('podcastList');
			const parsedPodcasts = storedPodcasts as Podcast[];

			if (parsedPodcasts) {
				dispatch(setPodcastList(parsedPodcasts));
			} else {
				const podcastApi = new PodcastService(new ApiPodcast());
				try {
					dispatch(setLoading(true));
					const podcasts = await podcastApi.getPodcasts(NUMBER_OF_PODCASTS);
					dispatch(setPodcastList(podcasts));
					dispatch(setLoading(false));

					if (shouldFetchPodcasts) {
						setItem('podcastList', podcasts);
					}
				} catch (error) {
					console.error('Error fetching podcasts', error);
				}
			}
		};

		if (shouldFetchPodcasts) {
			loadPodcasts();
		}
	}, [dispatch, shouldFetchPodcasts]);

	return podcastList;
};

export default usePodcast;
