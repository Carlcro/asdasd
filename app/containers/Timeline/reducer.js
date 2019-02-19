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
/* eslint-disable no-underscore-dangle */

import { fromJS } from 'immutable';

import {
  LOAD_TIMELINE_SUCCESS,
  LOAD_TIMELINE,
  LOAD_TIMELINE_ERROR,
  SAVE_COMMENT,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
  SAVE_LIKE,
  SAVE_LIKE_SUCCESS,
  SAVE_LIKE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  timeline: [],
});

function timelineReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TIMELINE:
      return state.set('loading', true).set('error', false);
    case LOAD_TIMELINE_SUCCESS:
      return state.set('timeline', action.timeline).set('loading', false);
    case LOAD_TIMELINE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SAVE_COMMENT:
      return state.set('loading', true).set('error', false);
    case SAVE_COMMENT_SUCCESS: {
      const timeline = state
        .get('timeline')
        .filter(x => x._id !== action.timeline._id);
      timeline.push(action.timeline);
      return state.set('timeline', timeline).set('loading', false);
    }
    case SAVE_COMMENT_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SAVE_LIKE:
      return state.set('loading', true).set('error', false);
    case SAVE_LIKE_SUCCESS:
      return state.set('timeline', action.timeline).set('loading', false);
    case SAVE_LIKE_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default timelineReducer;
