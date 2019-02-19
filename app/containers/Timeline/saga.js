import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_TIMELINE, SAVE_COMMENT, SAVE_LIKE } from './constants';
import {
  timelineLoaded,
  timelineLoadingError,
  commentSaved,
  commentSavedError,
  likeSaved,
  likeSavedError,
} from './actions';
import {
  getTimeline,
  saveComment,
  saveLike,
} from '../../services/timelineService';

const apiEndpoint = '/timeline';

function timelineUrl(id) {
  if (id) return `${apiEndpoint}/${id}`;
  return `${apiEndpoint}`;
}

function commentUrl(id) {
  return `${apiEndpoint}/comment/${id}`;
}

function likeUrl(id) {
  return `${apiEndpoint}/like/${id}`;
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
  const requestURL = commentUrl(action.id);
  try {
    const { data: timeline } = yield call(saveComment, {
      requestURL,
      content: action.content,
    });
    yield put(commentSaved(timeline));
  } catch (err) {
    yield put(commentSavedError(err));
  }
}

export function* saveNewLike(action) {
  const requestURL = likeUrl(action.id);
  try {
    const { data: timeline } = yield call(saveLike, {
      requestURL,
      liked: action.liked,
    });
    yield put(likeSaved(timeline));
  } catch (err) {
    yield put(likeSavedError(err));
  }
}

export function* timelineData() {
  yield takeLatest(LOAD_TIMELINE, fetchTimeline);
  yield takeLatest(SAVE_COMMENT, saveNewComment);
  yield takeLatest(SAVE_LIKE, saveNewLike);
}
