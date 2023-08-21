import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { parseTextToHtml } from '@/utils/formatters';
import { Card } from '@/components/card/card';
import useEpisodes from '@/hooks/useEpisodes';
import { Episode } from '@/modules/podcast/domain/models/Episode';
import { ROUTES } from '@/constants/app.constants';

export const EpisodeDetail = () => {
	const [episode, setEpisode] = useState<Episode | undefined>(undefined);
	const navigate = useNavigate();
	const { podcastId, episodeId } = useParams<{
		podcastId: string;
		episodeId: string;
	}>();
	const episodeList = useEpisodes(podcastId as string) as unknown as Episode[];

	const loadData = async () => {
		const episode = episodeList?.find(
			episode => episode.id === Number(episodeId)
		);
		if (!episode) {
			navigate(ROUTES.NOT_FOUND);
			return;
		}
		setEpisode(episode);
	};

	useEffect(() => {
		loadData();
	}, [episodeList]);

	return (
		<div className='episode-detail'>
			{episode ? (
				<Card>
					<h2 className='episode-detail-title'>{episode?.name}</h2>
					<div
						className='episode-detail-description'
						dangerouslySetInnerHTML={{
							__html: parseTextToHtml(episode?.description),
						}}
					/>
					<hr />
					<audio
						className='episode-detail-audio-controls'
						controls
						src={episode?.url}
					/>
				</Card>
			) : (
				<div className='episode-detail-skeleton skeleton-box' />
			)}
		</div>
	);
};
