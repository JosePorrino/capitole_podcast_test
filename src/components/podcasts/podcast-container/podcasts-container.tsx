import { useLoading } from '@/hooks/useLoader';

export const PodcastsContainer = () => {
	const { startLoading, stopLoading } = useLoading();

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
