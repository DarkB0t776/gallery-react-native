import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import {FETCH_IMAGES_REQUEST} from '../types/index';
import {fetchImagesSuccess} from '../actions';
import {fetchImagesAPI} from '../api';

function* fetchImages() {
  try {
    const data = yield call(fetchImagesAPI);
    yield put(fetchImagesSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(FETCH_IMAGES_REQUEST, fetchImages);
}
