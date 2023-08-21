import { all } from 'redux-saga/effects';
import { watchSetSearchPodcast } from './podcastSaga';
import { watchResetEpisodesSaga } from './episodeSaga';

function* rootSaga() {
	yield all([watchSetSearchPodcast(), watchResetEpisodesSaga()]);
}

export default rootSaga;
