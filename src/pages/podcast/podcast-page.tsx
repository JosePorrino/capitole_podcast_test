import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { ROUTES } from '@/constants/app.constants';
import usePodcast from '@/hooks/usePodcast';
import { PodcastDetail } from '@/components/podcasts/podcast-detail';
import { PodcastSkeleton } from '@/components/podcasts/podcast-skeleton';

export const PodcastPage = () => {
	const [podcast, setPodcast] = useState<Podcast | undefined>(undefined);
	const { podcastId } = useParams<{ podcastId: string }>();
	const navigate = useNavigate();

	const podcastList = usePodcast();

	useEffect(() => {
		if (podcastList.length > 0) {
			const podcast = podcastList?.find(
				(podcast: Podcast) => podcast.id === podcastId
			);
			if (!podcast) {
				navigate(ROUTES.NOT_FOUND);
				return;
			}
			setPodcast(podcast);
		}
	}, [podcastList]);

	return (
		<div className='podcast-page'>
			<div className='podcast-page-container o-row'>
				<aside className='podcast-page-aside o-grid-3'>
					{podcast && <PodcastDetail podcast={podcast} />}
					{!podcast && <PodcastSkeleton />}
				</aside>
				<section className='podcast-page-section o-grid-9'>
					<Outlet />
				</section>
			</div>
		</div>
	);
};
