import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TIMELINE } from './constants';
import { timelineLoaded, timelineLoadingError } from './actions';
import { getTimeline } from '../../services/timelineService';

const apiEndpoint = '/timeline';

function timelineUrl() {
  return `${apiEndpoint}`;
}
/**
 * Timeline request/response handler
 */
export function* fetchTimeline() {
  const requestURL = timelineUrl();
  try {
    const { data: timeline } = yield call(getTimeline, requestURL);
    yield put(timelineLoaded(timeline));
  } catch (err) {
    yield put(timelineLoadingError(err));
  }
}

export function* timelineData() {
  yield takeLatest(LOAD_TIMELINE, fetchTimeline);
}
