import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '@/components/header';
import useLoading from '@/hooks/useLoading';
import { useBrowserStore } from '@/hooks/useBrowserStore';
import { setPodcastList } from '@/redux/actions/podcastAction';
import {
	setEpisodesList,
	setEpisodesPodcastId,
} from '@/redux/actions/episodeAction';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { Episode } from '@/modules/podcast/domain/models/Episode';

export const App: React.FC = () => {
	const isLoading = useLoading();
	const dispatch = useDispatch();
	const { getItem } = useBrowserStore();

	useEffect(() => {
		const loadCache = () => {
			const storedPodcasts = getItem('podcastsList');
			const parsedPodcasts = storedPodcasts as Podcast[];
			if (parsedPodcasts) {
				dispatch(setPodcastList(parsedPodcasts));
			}

			const storedEpisodes = getItem('episodesList');
			const parsedEpisodes = storedEpisodes as Episode[];
			if (parsedEpisodes) {
				dispatch(setEpisodesList(parsedEpisodes));
			}

			const storedEpisodesPodcastId = getItem('episodesPodcastId');
			const parsedID = storedEpisodesPodcastId as string;
			if (parsedID) {
				dispatch(setEpisodesPodcastId(parsedID));
			}
		};

		loadCache();
	}, []);

	return (
		<div className='app-layout'>
			<Header>
				<Link to={'/'}>
					<h1>Podcasts</h1>
				</Link>
				{isLoading && <div className='pulse-loader' />}
			</Header>

			<main>
				<Outlet />
			</main>
		</div>
	);
};
