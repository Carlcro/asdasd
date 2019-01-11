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

import { fromJS, toJS } from 'immutable';

import {
  LOAD_DAYTYPES_SUCCESS,
  LOAD_DAYTYPES,
  LOAD_DAYTYPES_ERROR,
  DELETE_DAYTYPE_SUCCESS,
  DELETE_DAYTYPE,
  DELETE_DAYTYPE_ERROR,
  SAVE_DAYTYPE_SUCCESS,
  SAVE_DAYTYPE,
  SAVE_DAYTYPE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  loading: false,
  error: false,
  dayTypes: false,
});

function dayTypesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_DAYTYPES:
      return state
        .set('loading', true)
        .set('error', false)
        .set('dayTypes', false);
    case LOAD_DAYTYPES_SUCCESS:
      return state.set('dayTypes', action.dayTypes).set('loading', false);
    case LOAD_DAYTYPES_ERROR:
      return state.set('error', action.error).set('loading', false);
    case DELETE_DAYTYPE:
      return state
        .set('loading', true)
        .set('error', false)
        .set('dayTypes', false);
    case DELETE_DAYTYPE_SUCCESS:
      return state
        .set(
          'dayTypes',
          state.get('dayTypes').filter(x => x.id !== action.dayType.id),
        )
        .set('loading', false);

    case DELETE_DAYTYPE_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SAVE_DAYTYPE:
      return state.set('loading', true).set('error', false);
    case SAVE_DAYTYPE_SUCCESS:
      const dayTypes = state
        .get('dayTypes')
        .filter(x => x.id !== action.dayType.id);
      dayTypes.push(action.dayType);

      return state.set('dayTypes', dayTypes);

    case SAVE_DAYTYPE_ERROR:
      return state.set('error', action.error).set('loading', false);

    default:
      return state;
  }
}

export default dayTypesReducer;
