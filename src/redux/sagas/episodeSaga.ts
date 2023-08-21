import { put, takeEvery } from 'redux-saga/effects';
import { setPodcastList } from '../actions/podcastAction';
import { setEpisodesList } from '../actions/episodeAction';

function* resetEpisodesSaga() {
	try {
		yield put(setEpisodesList([]));
	} catch (error) {
		console.log(
			'🚀 ~ file: podcastSaga.ts:20 ~ function*filterPodcastsSaga ~ error:',
			error
		);
	}
}

export function* watchResetEpisodesSaga() {
	yield takeEvery(setPodcastList.type, resetEpisodesSaga);
}
