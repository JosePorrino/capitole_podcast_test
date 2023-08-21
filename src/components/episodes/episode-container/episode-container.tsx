import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Episode } from '@/modules/podcast/domain/models/Episode';
import { Card } from '@/components/card/card';
import useEpisodes from '@/hooks/useEpisodes';
import { EpisodeElement } from '../episode-element';
import { EpisodeListSkeleton, EpisodeTitleSkeleton } from '../episode-skeleton';

export const EpisodeContainer = () => {
	const { podcastId } = useParams<{ podcastId: string }>();
	const episodeList = useEpisodes(podcastId as string) as unknown as Episode[];

	return (
		<>
			{episodeList?.length ? (
				<Card>
					<h2 className='episodes-title'>Episodes: {episodeList?.length}</h2>
				</Card>
			) : (
				<EpisodeTitleSkeleton />
			)}
			{episodeList?.length && podcastId ? (
				<Card>
					<table>
						<thead>
							<tr>
								<th>Title</th>
								<th>Date</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							{episodeList?.map((episode, key) => {
								const customKey = `episode_${key}`;
								return (
									<Fragment key={customKey}>
										<EpisodeElement episode={episode} podcastId={podcastId} />
									</Fragment>
								);
							})}
						</tbody>
					</table>
				</Card>
			) : (
				<EpisodeListSkeleton />
			)}
		</>
	);
};
