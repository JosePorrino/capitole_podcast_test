import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { createAction } from '@reduxjs/toolkit';

export const setPodcastList = createAction<Podcast[]>('SET_PODCAST_LIST');
export const setSearchPodcast = createAction<string>('SET_SEARCH_PODCAST');
export const setFilterPodcast = createAction<Podcast[]>('SET_FILTER_PODCASTS');
