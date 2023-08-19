import { combineReducers } from '@reduxjs/toolkit';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
	loadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
