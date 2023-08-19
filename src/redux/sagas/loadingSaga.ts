import { put, takeEvery } from 'redux-saga/effects';
import { setLoading, setModificationExample } from '../actions/loadingAction';

function* setLoadingSaga(action: ReturnType<typeof setLoading>) {
	// Simulamos una tarea asincrónica con un retraso
	yield new Promise(resolve => setTimeout(resolve, 1000));

	yield put(setModificationExample(action.payload ? 'Loading' : ''));
}

export function* rootSaga() {
	yield takeEvery(setLoading.type, setLoadingSaga);
}
