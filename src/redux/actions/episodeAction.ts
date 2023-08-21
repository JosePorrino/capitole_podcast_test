import { Episode } from '@/modules/podcast/domain/models/Episode';
import { createAction } from '@reduxjs/toolkit';

export const setEpisodesPodcastId = createAction<string>(
	'SET_EPISODES_PODCAST_ID'
);
export const setEpisodesList = createAction<Episode[]>('SET_EPISODES_LIST');
