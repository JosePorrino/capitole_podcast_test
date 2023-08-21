import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from './loadingReducer';
import podcastReducer from './podcastReducer';
import episodesReducer from './episodesReducer';

const rootReducer = combineReducers({
	loadingReducer,
	podcastReducer,
	episodesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
