import { put, select, takeEvery } from 'redux-saga/effects';
import { setSearchPodcast, setFilterPodcast } from '../actions/podcastAction';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { RootState } from '../reducers';

function* filterPodcastsSaga(action: ReturnType<typeof setSearchPodcast>) {
	try {
		const { podcastList } = yield select(
			(state: RootState) => state.podcastReducer
		);
		const filteredPodcasts = podcastList.filter(
			(podcast: Podcast) =>
				podcast.name.toLowerCase().includes(action.payload.toLowerCase()) ||
				podcast.author.toLowerCase().includes(action.payload.toLowerCase())
		);

		yield put(setFilterPodcast(filteredPodcasts));
	} catch (error) {
		console.log(
			'🚀 ~ file: podcastSaga.ts:20 ~ function*filterPodcastsSaga ~ error:',
			error
		);
	}
}

export function* watchSetSearchPodcast() {
	yield takeEvery(setSearchPodcast.type, filterPodcastsSaga);
}
