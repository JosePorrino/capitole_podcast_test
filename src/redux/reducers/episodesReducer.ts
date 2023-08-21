import { Episode } from '@/modules/podcast/domain/models/Episode';
import { createReducer } from '@reduxjs/toolkit';
import { setEpisodesList } from '../actions/episodesAction';

interface IState {
	episodesList: Episode[];
}

const initialState: IState = {
	episodesList: [],
};

const podcastReducer = createReducer(initialState, builder => {
	builder.addCase(setEpisodesList, (state, action) => {
		state.episodesList = action.payload;
	});
});

export default podcastReducer;
