import { Link, Outlet, useNavigate } from 'react-router-dom';
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
import { ROUTES } from '@/constants/app.constants';

export const App: React.FC = () => {
	const isLoading = useLoading();
	const dispatch = useDispatch();
	const { getItem } = useBrowserStore();
	const navigate = useNavigate();

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

	const handleBack = () => navigate(-1);

	return (
		<div className='app-layout'>
			<Header>
				<Link to={'/'}>
					<h1>Podcaster</h1>
				</Link>
				{isLoading && <div className='pulse-loader' />}
			</Header>
			{location.pathname !== ROUTES.HOME && (
				<div className='o-row o-align-end'>
					<a onClick={handleBack}>Go back</a>
				</div>
			)}

			<main>
				<Outlet />
			</main>
		</div>
	);
};
