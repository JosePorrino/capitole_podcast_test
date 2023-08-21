import { all } from 'redux-saga/effects';
import { watchSetSearchPodcast } from './podcastSaga';

function* rootSaga() {
	yield all([watchSetSearchPodcast()]);
}

export default rootSaga;
