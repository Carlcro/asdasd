import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DAYTYPES, DELETE_DAYTYPE, SAVE_DAYTYPE } from './constants';
import {
  dayTypesLoaded,
  dayTypesLoadingError,
  dayTypeDeleted,
  dayTypeDeleteError,
  dayTypeSaved,
  dayTypeSaveError,
} from './actions';

import {
  getDayTypes,
  deleteDayType,
  saveDayType,
} from '../../services/dayTypesService';

/**
 * DayTypes request/response handler
 */

const apiEndpoint = 'http://localhost:44387/api/dayTypes';

function dayTypeUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function* fetchDayTypes() {
  const requestURL = apiEndpoint;

  try {
    const { data: dayTypes } = yield call(getDayTypes, requestURL);
    yield put(dayTypesLoaded(dayTypes.data));
  } catch (err) {
    yield put(dayTypesLoadingError(err));
  }
}

export function* deleteDayTypes(action) {
  const requestURL = dayTypeUrl(action.id);

  try {
    const { data: dayTypes } = yield call(deleteDayType, requestURL);
    yield put(dayTypeDeleted(dayTypes.data));
  } catch (err) {
    yield put(dayTypeDeleteError(err));
  }
}

export function* saveDayTypes(action) {
  const requestURL = dayTypeUrl(action.dayType.id);

  try {
    const { data: dayTypes } = yield call(saveDayType, {
      url: requestURL,
      body: action.dayType,
    });
    yield put(dayTypeSaved(dayTypes.data));
  } catch (err) {
    yield put(dayTypeSaveError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* dayTypesData() {
  // Watches for LOAD_DAYTYPES actions and calls fetchDayTypes when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(DELETE_DAYTYPE, deleteDayTypes);
  yield takeLatest(LOAD_DAYTYPES, fetchDayTypes);
  yield takeLatest(SAVE_DAYTYPE, saveDayTypes);
}
