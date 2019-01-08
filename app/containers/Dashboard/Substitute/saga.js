import format from 'date-fns/format';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_BALANCES,
  LOAD_MESSAGES,
  LOAD_INQUIRIES,
  LOAD_SCHEDULE,
  SAVE_INQUIRY,
} from './constants';
import {
  balancesLoaded,
  balancesLoadingError,
  messagesLoaded,
  messagesLoadingError,
  scheduleLoaded,
  scheduleLoadingError,
} from './actions';

import { getBalances } from '../../../services/Dashboard/substituteBalancesService';
import { getMessages } from '../../../services/Dashboard/substituteMessagesService';
import {
  getInquiries,
  saveInquiry,
} from '../../../services/Dashboard/substituteInquiriesService';
import { getShifts } from '../../../services/Dashboard/substituteShiftsService';

const apiEndpoint = 'http://localhost:44387/api/dashboard/substitute';

function balancesUrl(dateFrom, dateTo) {
  return `${apiEndpoint}/balances/${dateFrom}/${dateTo}`;
}

function messagesUrl(dateFrom, dateTo) {
  return `${apiEndpoint}/messages/${dateFrom}/${dateTo}`;
}

function inquiriesUrl(dateFrom) {
  return `${apiEndpoint}/inquiries/${dateFrom}`;
}

function saveInquiryUrl(inquiry) {
  if (inquiry.id) return `${apiEndpoint}/inquiries/${inquiry.id}`;
  return `${apiEndpoint}/inquiries`;
}

function shiftseUrl(dateFrom, dateTo) {
  return `${apiEndpoint}/shifts/${dateFrom}/${dateTo}`;
}

/**
 * Balances request/response handler
 */

export function* fetchBalances(action) {
  const requestURL = balancesUrl(action.dateFrom, action.dateTo);

  try {
    const { data: balance } = yield call(getBalances, requestURL);
    yield put(balancesLoaded(balance.data));
  } catch (err) {
    yield put(balancesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* balancesData() {
  // Watches for LOAD_BALANCES actions and calls fetchBalances when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_BALANCES, fetchBalances);
}

/**
 * Messages request/response handler
 */

export function* fetchMessages(action) {
  const requestURL = messagesUrl(action.dateFrom, action.dateTo);

  try {
    const { data: messages } = yield call(getMessages, requestURL);
    yield put(messagesLoaded(messages.data));
  } catch (err) {
    yield put(messagesLoadingError(err));
  }
}

export function* messagesData() {
  yield takeLatest(LOAD_MESSAGES, fetchMessages);
}

/**
 * Inquiries request/response handler
 */

export function* fetchInquiries() {
  const dateFrom = format(new Date(), 'YYYY-MM-DD');

  const requestURL = inquiriesUrl(dateFrom);

  try {
    const { data: inquiries } = yield call(getInquiries, requestURL);
    yield put(inquiriesLoaded(inquiries.data));
  } catch (err) {
    yield put(inquiriesLoadingError(err));
  }
}

export function* inquiriesData() {
  yield takeLatest(LOAD_INQUIRIES, fetchInquiries);
}

export function* saveNewInquiry(action) {
  const requestURL = saveInquiryUrl(action.inquiry);

  try {
    const { data: inquiries } = yield call(saveInquiry, [
      requestURL,
      action.inquiry,
    ]);
    yield put(inquirySaved(inquiries.data));
  } catch (err) {
    yield put(inquiriesLoadingError(err));
  }
}

export function* saveInquiryData() {
  yield takeLatest(SAVE_INQUIRY, saveNewInquiry);
}

/**
 * Schedule request/response handler
 */

export function* fetchSchedule(action) {
  const requestURL = shiftseUrl(action.dateFrom, action.dateTo);

  try {
    const { data: schedule } = yield call(getShifts, requestURL);
    yield put(scheduleLoaded(schedule.data));
  } catch (err) {
    yield put(scheduleLoadingError(err));
  }
}

export function* scheduleData() {
  yield takeLatest(LOAD_SCHEDULE, fetchSchedule);
}
