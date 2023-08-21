import { Episode } from '@/modules/podcast/domain/models/Episode';
import { createReducer } from '@reduxjs/toolkit';
import {
	setEpisodesList,
	setEpisodesPodcastId,
} from '../actions/episodeAction';

interface IState {
	episodesPodcastId: string;
	episodesList: Episode[];
}

const initialState: IState = {
	episodesPodcastId: '',
	episodesList: [],
};

const podcastReducer = createReducer(initialState, builder => {
	builder.addCase(setEpisodesPodcastId, (state, action) => {
		state.episodesPodcastId = action.payload;
	});
	builder.addCase(setEpisodesList, (state, action) => {
		state.episodesList = action.payload;
	});
});

export default podcastReducer;
