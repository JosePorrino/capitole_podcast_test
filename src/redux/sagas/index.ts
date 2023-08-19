import { all } from 'redux-saga/effects';
import { rootSaga as loadingSaga } from './loadingSaga';

function* rootSaga() {
	yield all([loadingSaga()]);
}

export default rootSaga;
