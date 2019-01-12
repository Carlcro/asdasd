import {
  LOAD_BALANCES,
  LOAD_BALANCES_SUCCESS,
  LOAD_BALANCES_ERROR,
  LOAD_MESSAGES,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES_ERROR,
  LOAD_INQUIRIES,
  LOAD_INQUIRIES_SUCCESS,
  LOAD_INQUIRIES_ERROR,
  SAVE_INQUIRY,
  SAVE_INQUIRY_SUCCESS,
  SAVE_INQUIRY_ERROR,
  LOAD_SCHEDULE,
  LOAD_SCHEDULE_SUCCESS,
  LOAD_SCHEDULE_ERROR,
} from './constants';

export function loadBalances(dateFrom, dateTo) {
  return {
    type: LOAD_BALANCES,
    dateFrom,
    dateTo,
  };
}

export function balancesLoaded(balances) {
  return {
    type: LOAD_BALANCES_SUCCESS,
    balances,
  };
}

export function balancesLoadingError(error) {
  return {
    type: LOAD_BALANCES_ERROR,
    error,
  };
}

export function loadMessages(dateFrom, dateTo) {
  return {
    type: LOAD_MESSAGES,
    dateFrom,
    dateTo,
  };
}

export function messagesLoaded(messages) {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages,
  };
}

export function messagesLoadingError(error) {
  return {
    type: LOAD_MESSAGES_ERROR,
    error,
  };
}

export function loadInquiries() {
  return {
    type: LOAD_INQUIRIES,
  };
}

export function inquiriesLoaded(inquiries) {
  return {
    type: LOAD_INQUIRIES_SUCCESS,
    inquiries,
  };
}

export function inquiriesLoadingError(error) {
  return {
    type: LOAD_INQUIRIES_ERROR,
    error,
  };
}

export function saveInquiry(inquiry) {
  return {
    type: SAVE_INQUIRY,
    inquiry,
  };
}

export function inquirySaved(inqId) {
  return {
    type: SAVE_INQUIRY_SUCCESS,
    inqId,
  };
}

export function inquirySavedError(error) {
  return {
    type: SAVE_INQUIRY_ERROR,
    error,
  };
}

export function loadSchedule(dateFrom, dateTo) {
  return {
    type: LOAD_SCHEDULE,
    dateFrom,
    dateTo,
  };
}

export function scheduleLoaded(schedule) {
  return {
    type: LOAD_SCHEDULE_SUCCESS,
    schedule,
  };
}

export function scheduleLoadingError(error) {
  return {
    type: LOAD_SCHEDULE_ERROR,
    error,
  };
}
