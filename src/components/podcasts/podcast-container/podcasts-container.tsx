import { useState, useEffect } from 'react';
import { PodcastElement } from '../podcast-element/podcast-element';
import { PodcastSkeletonLine } from '../podcast-skeleton';
import { Input } from '@/components/input/input';
import { useSearchPodcast } from '@/hooks/useSearchPodcast';
import usePodcast from '@/hooks/usePodcast';
import useLoading from '@/hooks/useLoading';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { useDebounceCallback } from '@/hooks/useDebounceCallback';

export const PodcastsContainer = () => {
	const [search, setSearch] = useState('');

	const podcastList = usePodcast();
	const isLoading = useLoading();
	const { filterPodcats, searchPodcast, handleSearchPodcast } =
		useSearchPodcast();

	const debouncedFilter = useDebounceCallback(() => {
		handleSearchPodcast(search);
	}, 500);

	useEffect(() => {
		debouncedFilter();
	}, [search]);

	return (
		<div className='podcasts-container'>
			<div className='podcasts-filter'>
				<span data-testid='counter' className='badge'>
					{searchPodcast ? filterPodcats?.length : podcastList?.length}
				</span>
				<Input
					type='text'
					defaultValue={searchPodcast}
					placeholder='Filter podcasts...'
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setSearch(event.target.value)
					}
				/>
			</div>
			{isLoading && <PodcastSkeletonLine />}
			<div className='podcasts-list' data-testid='podcast-list'>
				{searchPodcast
					? filterPodcats.map((podcast: Podcast) => (
							<PodcastElement key={podcast.id} podcast={podcast} />
					  ))
					: podcastList.map((podcast: Podcast) => (
							<PodcastElement key={podcast.id} podcast={podcast} />
					  ))}
				{filterPodcats?.length === 0 && searchPodcast !== '' && (
					<p>
						No podcasts found for search: <b>{searchPodcast}</b>
					</p>
				)}
			</div>
		</div>
	);
};
