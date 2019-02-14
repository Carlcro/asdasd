import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TIMELINE, SAVE_COMMENT } from './constants';
import {
  timelineLoaded,
  timelineLoadingError,
  commentSaved,
  commentSavedError,
} from './actions';
import { getTimeline, saveComment } from '../../services/timelineService';

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

export function* saveNewComment(action) {
  const requestURL = timelineUrl();
  try {
    const timeline = yield call(
      saveComment,
      action.comment,
      action.id,
      requestURL,
    );
    yield put(commentSaved(timeline));
  } catch (err) {
    yield put(commentSavedError(err));
  }
}

export function* timelineData() {
  yield takeLatest(LOAD_TIMELINE, fetchTimeline);
  yield takeLatest(SAVE_COMMENT, saveNewComment);
}
