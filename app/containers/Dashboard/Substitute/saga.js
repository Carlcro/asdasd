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
  inquiriesLoaded,
  inquiriesLoadingError,
  inquirySaved,
  inquirySavedError,
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
  return `${apiEndpoint}/inquiries/${inquiry.id}`;
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

export function* saveNewInquiry(action) {
  const requestURL = saveInquiryUrl(action.inquiry);

  try {
    const { data: inquiries } = yield call(saveInquiry, {
      requestURL,
      body: action.inquiry,
    });
    yield put(inquirySaved(inquiries));
  } catch (err) {
    yield put(inquirySavedError(err));
  }
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

/**
 * Root saga manages watcher lifecycle
 */
export function* balanceData() {
  yield takeLatest(LOAD_BALANCES, fetchBalances);
}

export function* messageData() {
  yield takeLatest(LOAD_MESSAGES, fetchMessages);
}

export function* inquiryData() {
  yield takeLatest(LOAD_INQUIRIES, fetchInquiries);
  yield takeLatest(SAVE_INQUIRY, saveNewInquiry);
}
export function* scheduleData() {
  yield takeLatest(LOAD_SCHEDULE, fetchSchedule);
}
