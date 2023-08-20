import { useEffect } from 'react';
import { useLoading } from '@/hooks/useLoader';
// import { usePodcasts } from '@/hooks/usePodcast';

export const PodcastsContainer = () => {
	const { startLoading, stopLoading } = useLoading();

	// const { getPodcasts, getEpisodes } = usePodcasts();

	// const loadPodcasts = async () => {
	// 	const podcasts = await getPodcasts();
	// 	console.log(
	// 		'🚀 ~ file: podcasts-container.tsx:11 ~ loadData ~ podcasts:',
	// 		podcasts
	// 	);
	// };
	// const loadEpisodes = async () => {
	// 	const episodes = await getEpisodes('1493353598');
	// 	console.log(
	// 		'🚀 ~ file: episodes-container.tsx:11 ~ loadData ~ episodes:',
	// 		episodes
	// 	);
	// };

	useEffect(() => {
		// loadPodcasts();
		// loadEpisodes();
	}, []);

	const handleStartLoading = () => {
		startLoading();
	};

	const handleStopLoading = () => {
		stopLoading();
	};
	return (
		<div className='podcasts-container'>
			Home Podcasts
			<div className='o-row u-margin:v-24'>
				<div className='o-grid-2'>Test</div>
				<div className='o-grid-5 o-align-center'>
					<button className='c-btn' onClick={handleStartLoading}>
						Start Loading
					</button>
				</div>
				<div className='o-grid-5 o-align-center'>
					<button className='c-btn' onClick={handleStopLoading}>
						Stop Loading
					</button>
				</div>
			</div>
		</div>
	);
};
