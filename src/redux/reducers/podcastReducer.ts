import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { createReducer } from '@reduxjs/toolkit';
import {
	setPodcastList,
	setSearchPodcast,
	setFilterPodcast,
} from '../actions/podcastAction';

interface IState {
	podcastList: Podcast[];
	searchPodcast: string;
	filterPodcats: Podcast[];
}

const initialState: IState = {
	podcastList: [],
	searchPodcast: '',
	filterPodcats: [],
};

const podcastReducer = createReducer(initialState, builder => {
	builder
		.addCase(setPodcastList, (state, action) => {
			state.podcastList = action.payload;
		})
		.addCase(setSearchPodcast, (state, action) => {
			state.searchPodcast = action.payload;
		})
		.addCase(setFilterPodcast, (state, action) => {
			state.filterPodcats = action.payload;
		});
});

export default podcastReducer;
