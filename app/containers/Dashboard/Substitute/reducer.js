/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_BALANCES_SUCCESS,
  LOAD_BALANCES,
  LOAD_BALANCES_ERROR,
  LOAD_MESSAGES_SUCCESS,
  LOAD_MESSAGES,
  LOAD_MESSAGES_ERROR,
  LOAD_INQUIRIES_SUCCESS,
  LOAD_INQUIRIES,
  LOAD_INQUIRIES_ERROR,
  LOAD_SCHEDULE_SUCCESS,
  LOAD_SCHEDULE,
  LOAD_SCHEDULE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  balances: false,
  messages: false,
  inquiries: false,
  schedule: false,
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BALANCES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('balances', false);
    case LOAD_BALANCES_SUCCESS:
      return state.set('balances', action.balances).set('loading', false);
    case LOAD_BALANCES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('messages', []);
    case LOAD_MESSAGES_SUCCESS:
      return state.set('messages', action.messages).set('loading', false);
    case LOAD_MESSAGES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_INQUIRIES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('inquiries', []);
    case LOAD_INQUIRIES_SUCCESS:
      return state.set('inquiries', action.inquiries).set('loading', false);
    case LOAD_INQUIRIES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case LOAD_SCHEDULE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('schedule', []);
    case LOAD_SCHEDULE_SUCCESS:
      return state.set('schedule', action.schedule).set('loading', false);
    case LOAD_SCHEDULE_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default dashboardReducer;
